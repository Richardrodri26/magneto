import { HeaderContext } from '@tanstack/table-core';
import { CustomFilterBox, FilterByText, FiltersBox } from './Filters';
import { filterType } from '../context';

interface IThContectProps {
  children: React.ReactNode;
  filters?: filterType[];
  canSort?: boolean;
  thead: HeaderContext<any, unknown>;
  isLastTh?: boolean;
}

interface IThContentProps {
  children: React.ReactNode;
  canSort?: boolean;
  thead: HeaderContext<any, unknown>;
}

export const ThContent = ({ children, filters, thead, canSort = false, isLastTh = false }: IThContectProps) => {
  return (
    <div className='flex items-center justify-between'>
      {children}

      <FiltersBox thead={thead} canSort={canSort} filters={filters} isLastTh={isLastTh} />
    </div>
  );
};

export const ThContentTextFilter = ({ children, thead, canSort = false }: IThContentProps) => {
  return (
    <div className='flex items-center justify-between'>
      {children}


        <CustomFilterBox thead={thead} canSort={canSort} filterChildren={<FilterByText thead={thead} /> }  />
      {/* <FiltersBox thead={thead} canSort={canSort} /> */}
    </div>
  );
};
