import { HeaderContext } from '@tanstack/react-table';
import { useMemo, useRef, useState } from 'react';
import { filterType, useDynamicTableContext } from '../context';
import { ControlledMenu, useClick } from '@szhsin/react-menu';
import { AArrowDown, AArrowUp, RefreshCcw, Search, X } from 'lucide-react';
import { RenderIf } from '@/utils/components';
import { OrderTypes, StringFilter } from '@/remote/gql-generated';
import { cn } from '@/lib/utils';
import { useHandleTextInputWithTimer } from '../hooks/useHandleTextInput';
import { Input } from '../../ui/Input';


interface IFiltersBoxProps {
  thead: HeaderContext<any, unknown>;
  filters?: filterType[];
  canSort?: boolean;
  isLastTh?: boolean;
}

export const FiltersBox = ({ thead, filters, canSort, isLastTh = false }: IFiltersBoxProps) => {
  const ref = useRef(null);

  const [currentFilterColumn, setCurrentFilterColumn] = useDynamicTableContext(state => state.currentFilterColumn);
  const [isOpen, setOpen] = useState(false);
  const anchorProps = useClick(isOpen, setOpen);

  const cellParam = thead.header.id;

  const currentTheadIsFiltering = useMemo(() => currentFilterColumn == cellParam, [currentFilterColumn]);

  const setCurrentFilter = () => {
    if (currentTheadIsFiltering) {
      setCurrentFilterColumn(draft => {
        draft.currentFilterColumn = undefined;
      });
    } else {
      setCurrentFilterColumn(draft => {
        draft.currentFilterColumn = cellParam;
      });
    }
  };

  if (!Boolean(currentTheadIsFiltering && filters) && !canSort) return <></>;

  return (
    <div className=''>
      <button type='button' ref={ref} {...anchorProps}>
        <Search className='ml-2 w-4 h-4 cursor-pointer fill-primary-purple' />
      </button>

      <>
        <ControlledMenu
          gap={12}
          direction='bottom'
          transition
          boundingBoxPadding='10'
          portal
          state={isOpen ? 'open' : 'closed'}
          anchorRef={ref}
          onClose={() => {
            setOpen(false);
            setCurrentFilter();
          }}>
          <RenderIf condition={Boolean(filters?.includes('text'))}>
            <FilterByText thead={thead} />
          </RenderIf>

          <RenderIf condition={canSort || false}>
            <SortContent thead={thead} />
          </RenderIf>
        </ControlledMenu>
      </>
    </div>
  );
};

export const CustomFilterBox = ({ thead, canSort, filterChildren }: IFiltersBoxProps & { filterChildren: React.ReactNode }) => {
  const ref = useRef(null);

  const [currentFilterColumn, setCurrentFilterColumn] = useDynamicTableContext(state => state.currentFilterColumn);
  const [isOpen, setOpen] = useState(false);
  const anchorProps = useClick(isOpen, setOpen);

  const cellParam = thead.header.id;

  const currentTheadIsFiltering = useMemo(() => currentFilterColumn == cellParam, [currentFilterColumn]);

  const setCurrentFilter = () => {
    if (currentTheadIsFiltering) {
      setCurrentFilterColumn(draft => {
        draft.currentFilterColumn = undefined;
      });
    } else {
      setCurrentFilterColumn(draft => {
        draft.currentFilterColumn = cellParam;
      });
    }
  };

  // if (!Boolean(currentTheadIsFiltering)) return <></>;

  return (
    <div className=''>
      <button type='button' ref={ref} {...anchorProps}>
        <Search className='ml-2 w-4 h-4 cursor-pointer fill-primary-purple' />
      </button>

      <>
        <ControlledMenu
          gap={12}
          direction='bottom'
          transition
          boundingBoxPadding='10'
          portal
          state={isOpen ? 'open' : 'closed'}
          anchorRef={ref}
          onClose={() => {
            setOpen(false);
            setCurrentFilter();
          }}>
          {/* <FilterByText thead={thead} /> */}

          {filterChildren}

          <RenderIf condition={canSort || false}>
            <SortContent thead={thead} />
          </RenderIf>
        </ControlledMenu>
      </>
    </div>
  );
};

interface IFilterByTextProps {
  thead: HeaderContext<any, unknown>;
}

export const FilterByText = ({ thead }: IFilterByTextProps) => {
  // hooks
  const [where, setDynamicTable] = useDynamicTableContext(state => state.where)
  
  const columnId = thead?.column?.id

  const whereValue = `${((where || { columnId: undefined })[columnId] as StringFilter)?._contains || ''}`

  const onChangeValue = (value?: string | number) => {

    setDynamicTable(draft => {
      if(where && !where[columnId]) {
        draft.where!["_and"] = [
          {
            [(columnId as string)]: {
              "_contains": value ? `${value}` : ''
            }
          }
        ] as StringFilter

      } else {
        draft.where = {
          [columnId]: {
            _contains: value ? `${value}` : ''
          }
        }
      }

    })

  };
  const { handleInput, loading, searchValue, removeSearchInput } = useHandleTextInputWithTimer(onChangeValue, whereValue);


  return (
    <div className='px-1'>
      <label className='font-main px-[5px] text-[#4B4B4B] text-sm'>Buscar</label>
      <div className='flex justify-between items-center border border-zinc-400'>
        <Input className={'h-[24px] border-none text-medium text-zinc-700'} onChange={handleInput} value={searchValue} />
        {loading ? <RefreshCcw  className='static' /> : <div className='h-4 w-4' />}
        {/* {(searchValue?.length || 0) > 0 ? <Icons.Close onClick={() => { onChangeValue('') }} className='fill-stroke-dark' /> : null} */}

        <RenderIf condition={Boolean(searchValue) && !loading}>
          <X className='fill-stroke-dark cursor-pointer mr-0.5' onClick={removeSearchInput} />
        </RenderIf>
      </div>
    </div>
  );
};

interface ISortContentProps {
  thead: HeaderContext<any, unknown>;
}

const SortContent = ({ thead }: ISortContentProps) => {
  const [orderBy, setOrderBy] = useDynamicTableContext(state => state.orderBy);

  const currentColumn = thead.header.id;

  const isSortingAsc = orderBy ? orderBy[0][currentColumn] === 'ASC' : false;
  const isSortingDesc = orderBy ? orderBy[0][currentColumn] === 'DESC' : false;

  const sortByParam = (order: OrderTypes) => {
    setOrderBy(draft => {
      if (draft.orderBy) {
        draft.orderBy[0][currentColumn] = draft.orderBy[0][currentColumn] === order ? null : order;
      } else {
        draft.orderBy = [
          {
            [`${thead.header.id}`]: order,
          },
        ];
      }
    });
  };

  return (
    <>
      <p className='font-main px-[5px] text-[#4B4B4B] text-sm'>Ordenar información</p>

      <p
        className={cn('flex gap-2 items-center font-main px-[5px] text-[#4B4B4B] text-sm cursor-pointer', {
          'bg-primary-purple text-white': isSortingAsc,
        })}
        onClick={() => {
          sortByParam(OrderTypes.Asc);
        }}>
        <AArrowUp /> Orden Ascendente
      </p>
      <p
        className={cn('flex gap-2 items-center font-main px-[5px] text-[#4B4B4B] text-sm cursor-pointer', {
          'bg-primary-purple text-white': isSortingDesc,
        })}
        onClick={() => {
          sortByParam(OrderTypes.Desc);
        }}>
        <AArrowDown /> Orden Descendente
      </p>
    </>
  );
};
