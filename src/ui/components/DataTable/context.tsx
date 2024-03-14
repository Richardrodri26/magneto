import { StringFilter, DateFilter, NumberFilter, OrderTypes, Pagination, MetadataPagination } from '@/remote/gql-generated';
import createCustomerStore from '@/stores/customContext';
import { ColumnDef, PaginationState, Table } from '@tanstack/react-table';

type BpmFilterType = Record<string, StringFilter | DateFilter | NumberFilter | { _contains: string | null }>;
export type filterType = 'text' | 'ranged-date' | 'ranged-number';

interface IDynamicTable {
  columns: ColumnDef<any>[];
  table?: Table<any>;
  tableData?: any[];
  currentFilterColumn?: string;
  enableMultiRowSelection?: boolean;
  checkedData?: any[];

  // Filters and Pagination data
  orderBy?: Record<string, OrderTypes | null>[];
  pagination?: Pagination;

  take: number;
  skip: number;

  metaPagination?: MetadataPagination;

  tablePagination?: PaginationState;

  where?: Record<string, StringFilter | DateFilter | NumberFilter | BpmFilterType>;

  customData?: Record<string, any>;
  loading?: boolean;
  refetchData?: () => void;

  toggle?: boolean;
}

const tableState: IDynamicTable = {
  columns: [],
  take: 5,
  skip: 0,
  loading: false,
  enableMultiRowSelection: true,
};

export const { Provider: DynamicTableProvider, useSelectorContext: useDynamicTableContext } = createCustomerStore(tableState);
