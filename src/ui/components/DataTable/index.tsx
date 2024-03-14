"use client"
import { Fragment, useEffect, useMemo, useState } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import { ColumnDef, ColumnOrderState, flexRender, getCoreRowModel, getPaginationRowModel, Header, PaginationState, RowSelectionState, Table, useReactTable } from '@tanstack/react-table';
import tableStyles from './table.module.css';
import { EmptyBodyGrid, LoadingBodyGrid } from './components/StateGrid';
import { cn } from '@/lib/utils';
import { useDynamicTableContext } from './context';
import { RenderEach, RenderIf } from '@/utils/components';

const DraggableColumnHeader = <T,>({ header, id }: { header: Header<T, unknown>; table: Table<T>; id: string }) => {
  // Dnd
  const { setNodeRef } = useDroppable({
    id: id,
  });

  const { transform } = useDraggable({
    id: id,
  });

  const left = (header?.column?.columnDef?.meta as any)?.left as string | undefined;
  const styles = (header?.column?.columnDef?.meta as any)?.styles as string | undefined;
  const isAction = ((header?.column?.columnDef?.meta as any)?.isAction as boolean | undefined) || false;

  return (
    <th
      scope='col'
      ref={setNodeRef}
      colSpan={header.colSpan}
      className={cn('sticky top-0 z-20 whitespace-nowrap bg-primary-lila-lighter px-5 py-2 text-start', { 'sticky z-[50]': Boolean(left) }, left, { 'max-w-[60px]': isAction }, styles)}>
      {header.isPlaceholder ? null : flexRender(header?.column?.columnDef?.header, header.getContext())}
    </th>
  );
};

interface IDynamicTableProps<T> {
  data: T[];
  columns: ColumnDef<T, any>[];
  isLoading?: boolean;
}

export const DataTable = <T,>({ data, columns: defaultColumns, isLoading = false }: IDynamicTableProps<T>) => {
  const [_, setTable] = useDynamicTableContext(state => state.table);
  const [dynamicColumns] = useDynamicTableContext(state => state.columns);
  const [checkedData] = useDynamicTableContext(state => state.checkedData);
  const [take] = useDynamicTableContext(state => state.take);
  const [enableMultiRowSelection] = useDynamicTableContext(state => state.enableMultiRowSelection);

  const [tableData, setTableData] = useState(data);
  const [tableDataContext] = useDynamicTableContext(state => state.tableData);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: take || 10,
  })

  const [columnVisibility, setColumnVisibility] = useState({});
  const [columns] = useState(() => [...defaultColumns]);
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(
    dynamicColumns
      ? dynamicColumns
          .map(column => {
            if ((column as any)?.columns) {
              return (column as any)?.columns?.map((column: any) => {
                return column?.id;
              });
            } else {
              return column?.id as string;
            }
          })
          .flat()
      : columns.map(column => column?.id as string),
  );

  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data: tableDataContext || tableData,
    // columns: defaultColumns,
    columns: dynamicColumns || columns,
    state: {
      columnVisibility,
      columnOrder: columnOrder,
      // columnOrder: dynamicColumns ? dynamicColumns.map(column => column?.id as string) : columnOrder,

      rowSelection,
      pagination,
      // pagination
      // pagination: tablePagination || { pageIndex: 0, pageSize: 10 },
    },
    onPaginationChange: setPagination,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onRowSelectionChange: setRowSelection,
    enableMultiRowSelection: enableMultiRowSelection,
    getCoreRowModel: getCoreRowModel(), //row model

    getPaginationRowModel: getPaginationRowModel(),
    // debugTable: true,
    // debugHeaders: true,
    // debugColumns: true,
  });

  useEffect(() => {
    setTable(draft => {
      draft.table = Object.assign({}, table) || undefined;
    });
  }, [table.getVisibleFlatColumns(), table.getState().columnOrder]);

  useEffect(() => {
    // onSelectedRowsChange(
    //   table.getSelectedRowModel().flatRows.map((row) => row.original),
    // )

    setTable(state => {
      state.checkedData = table.getSelectedRowModel().flatRows.map(row => row.original);
    });
  }, [rowSelection, table]);

  useEffect(() => {
    const a = dynamicColumns?.map(column => {
      if ((column as any)?.columns) {
        return (column as any)?.columns?.map((column: any) => {
          return column?.id;
        });
      } else {
        return column?.id as string;
      }
    });

    table.setColumnOrder(a?.flat());
  }, [dynamicColumns]);

  const flatColumns = useMemo(() => {
    const a = dynamicColumns?.map(column => {
      if ((column as any)?.columns) {
        return (column as any)?.columns?.map((column: any) => {
          return column?.id;
        });
      } else {
        return column?.id as string;
      }
    });

    return a?.flat()
  }, [dynamicColumns])

  return (
    <>
      {/* <DndContext onDragEnd={handleDragEnd}> */}
      <div className={cn(`${tableStyles.table__wrapper} w-full overflow-auto rounded-xl bg-scroll shadow-md`)}>
        <table className=' w-full table-auto border-collapse overflow-auto'>
          <thead className='bg-magneto-primary-lila-lighter text-magneto-primary-purple'>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <DraggableColumnHeader key={header.id} id={header.id} header={header} table={table} />
                ))}
              </tr>
            ))}
          </thead>

          <tbody className='bg-white'>
            <RenderIf condition={!isLoading}>
              <>
                {((tableDataContext || tableData)?.length || 0) == 0 ? (
                  <EmptyBodyGrid length={table.getAllColumns().length} />
                ) : (
                  table.getRowModel().rows.map(row => (
                    <tr className='h-10 border-b border-slate-100' key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <td
                          className={cn(
                            'whitespace-nowrap  bg-white  px-5',
                            { 'sticky z-[5] ': (cell?.column?.columnDef?.meta as any)?.left },
                            `${(cell?.column?.columnDef?.meta as any)?.left || ''}`,
                            {
                              'max-w-[60px]': (cell?.column?.columnDef?.meta as any)?.isAction || false,
                              [(cell?.column?.columnDef?.meta as any)?.cell]: Boolean((cell?.column?.columnDef?.meta as any)?.cell),
                            },
                          )}
                          key={cell.id}>
                          {flexRender(cell?.column?.columnDef?.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </>
            </RenderIf>

            <RenderIf condition={isLoading}>
              <LoadingBodyGrid columnLenght={(flatColumns || columns || []).length} />
            </RenderIf>
          </tbody>
        </table>

        {/* <div onClick={() => {
          table.setPageCount(12)
        }}>
          pagination change
        </div> */}
      </div>

      <DynamicTablePagination />
      {/* </DndContext> */}
    </>
  );
};

const DynamicTablePagination = () => {
  const [skip, setDynamicTableData] = useDynamicTableContext(state => state.skip);
  const [metaPagination] = useDynamicTableContext(state => state.metaPagination);
  const [take] = useDynamicTableContext(state => state.take);

  const pageNumbers = useMemo(() => {
    return Array.from({ length: metaPagination?.totalPages ?? 1 }, (_, i) => i + 1);
  }, [metaPagination?.totalPages]);

  const currentPage = metaPagination?.currentPage ?? 1;
  const totalPages = metaPagination?.totalPages ?? 1;

  const isFirstPage = currentPage == 1;
  const isLastPage = currentPage == totalPages;

  const nextPage = () => {
    if (isLastPage) return;

    setDynamicTableData(draft => {
      draft.skip = (skip || 0) + (draft.take || 1);
    });
  };

  const selectPage = (page: number) => {
    setDynamicTableData(draft => {
      const toSkip = (page - 1) * (draft.take || 1);
      draft.skip = toSkip < 0 ? 0 : toSkip;
    });
  };

  const prevPage = () => {
    if (isFirstPage) return;

    setDynamicTableData(draft => {
      draft.skip = (skip || 1) - (draft.take || 1);
    });
  };

  const getPaginationItems = useMemo(() => {
    if (totalPages < 2) return [1];

    const leftEllipsis = currentPage > 3 ? [1, '...'] : [1, 2];

    const rightEllipsisDefault = totalPages == 0 ? [] : [totalPages];
    const rightEllipsis = currentPage < totalPages - 2 ? ['...', totalPages] : rightEllipsisDefault;

    const startRange = Math.max(1, currentPage - 1);
    const endRange = Math.min(currentPage + 1, totalPages);

    const visiblePages = pageNumbers.slice(startRange - 1, endRange);

    const combinedArray = [...leftEllipsis, ...visiblePages, ...rightEllipsis];
    const uniqueArray = combinedArray.filter((item, index) => combinedArray.indexOf(item) === index || item === '...');

    return uniqueArray;
  }, [metaPagination]);

  return (
    <div className='mt-2 flex w-min gap-1 rounded-md px-2 py-1'>
      <span onClick={prevPage} className={cn('text-magneto-primary cursor-pointer select-none underline', { 'text-gray-300': isFirstPage })}>
        Anterior
      </span>

      <div className='flex w-56 items-center justify-center gap-1'>
        <RenderEach
          of={getPaginationItems}
          render={(page, index) => (
            <Fragment key={index}>
              {page === '...' ? (
                <span className='cursor-default' key={index}>
                  ...
                </span>
              ) : (
                <p
                  className={cn('cursor-pointer rounded-full px-2.5 py-0.5 hover:bg-magneto-primary-purple/80 hover:text-white', {
                    'bg-magneto-primary-purple text-white': currentPage == page,
                  })}
                  key={index}
                  onClick={() => {
                    selectPage(+page);
                  }}>
                  {page}
                </p>
              )}
            </Fragment>
          )}
        />
      </div>

      <span onClick={nextPage} className={cn('text-magneto-primary cursor-pointer select-none underline', { 'text-gray-300': isLastPage })}>
        Siguiente
      </span>
    </div>
  );
};
