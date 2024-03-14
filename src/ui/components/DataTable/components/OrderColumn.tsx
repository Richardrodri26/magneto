import { ChangeEvent, Fragment, useMemo, useState } from 'react';
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { motion } from 'framer-motion';
import { Column, ColumnOrderState } from '@tanstack/react-table';
import { useDynamicTableContext } from '../context';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/Popover';
import { ArrowBigDown, RefreshCcw, Search, Table } from 'lucide-react';
import { cn } from '@/lib/utils';
import { OrderItemDragAndDrop } from './OrderItemDragAndDrop';
import { OnlyChangeVisibilityColumn } from './OnlyChangeVisibilityColumn';

export const OrderColumnDynamicTable = ({ className }: { className?: string }) => {
  const [columnBoxView, setColumnBoxView] = useState(false);
  const [defaultColumnOrder, setDefaultColumnOrder] = useState<ColumnOrderState>();

  const [table] = useDynamicTableContext(state => state.table);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const [filteringColumn, setFilteringColumn] = useState<string>('');

  const onChangeFilteringColumn = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setFilteringColumn(value);
  };

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const newItems = table?.getState()?.columnOrder;
      const oldIndex = newItems.indexOf(active.id as any);
      const newIndex = newItems.indexOf(over?.id as any);


      if(!defaultColumnOrder) {
        setDefaultColumnOrder(newItems);
      }

      table.setColumnOrder(arrayMove(newItems, oldIndex, newIndex));
    }
  }

  const resetGridProperties = () => {
      if(defaultColumnOrder) {
        // table.resetColumnOrder()
        table.setColumnOrder(defaultColumnOrder)
      }

      table.resetColumnVisibility()

  }

  const orderColumns = table?.getState()?.columnOrder;

  const columns = table?.getAllLeafColumns();

  const sortedColumns = useMemo(() => {
    return orderColumns?.map(id => columns?.find(item => item.id === id)!);
  }, [orderColumns, table]);

  if (!((sortedColumns?.length || 0) > 0)) return <></>;

  // console.log('sortedColumns', sortedColumns)

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div
            className={cn('flex cursor-pointer items-center gap-2', className)}
            onClick={() => {
              setColumnBoxView(!columnBoxView);
            }}>
            <Table className='fill-stroke-dark' />
            Columnas
            <ArrowBigDown className={cn('-rotate-90 fill-stroke-dark transition-all', { 'rotate-90': columnBoxView })} />
          </div>
        </PopoverTrigger>

        <PopoverContent className='p-0'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='util__scroll max-h-[250px] min-h-[220px] w-full overflow-y-scroll rounded-lg bg-white shadow-md'>
            <div className='sticky left-0 top-0 inline-flex h-8 w-full items-center justify-start gap-2 border-b border-neutral-400 bg-white px-2.5 py-1'>
              {/* <div className="grow shrink basis-0 text-neutral-400 text-xs font-normal">Buscar</div> */}
              <input value={filteringColumn} onChange={onChangeFilteringColumn} className='shrink grow basis-0 text-xs font-normal text-neutral-400 outline-none' placeholder='Buscar' />
              <Search className='fill-[#BABABA]' />
            </div>

            <div onClick={resetGridProperties} className='sticky left-0 top-[32px] flex gap-1 items-center w-full bg-white px-2.5 py-1 cursor-pointer'>
            <RefreshCcw className='fill-stroke-dark' />
              Reiniciar configuración
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
              <SortableContext items={sortedColumns} strategy={verticalListSortingStrategy}>
                {filteringColumn.length > 1
                  ? sortedColumns
                      .filter(column => column?.id.includes(filteringColumn))
                      ?.map((column, index) => {
                        return <Fragment key={index}>{(column?.columnDef?.meta as any)?.left ? <OnlyChangeVisibilityColumn column={column} /> : <OrderItemDragAndDrop column={column} />}</Fragment>;
                      })
                  : sortedColumns?.map((column, index) => {
                      return <Fragment key={index}>{(column?.columnDef?.meta as any)?.left ? <OnlyChangeVisibilityColumn column={column} /> : <OrderItemDragAndDrop column={column} />}</Fragment>;
                    })}
              </SortableContext>
            </DndContext>
          </motion.div>
        </PopoverContent>
      </Popover>
    </>
  );
};
