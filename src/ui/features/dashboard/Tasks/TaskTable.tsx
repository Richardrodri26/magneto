"use client"
import { TaskListVariables } from '@/remote/gql-generated';
import { useNavigationTabs, useShallowGeneralStore } from '@/stores';
import { Button, DataTable } from '@/ui/components';
import { MenuActionList, MenuItemTable } from '@/ui/components/ui/Menu';
import { CircleEllipsis } from 'lucide-react';

export const TaskTableMenuActionTd = ({ data, index }: { data: TaskListVariables; index: number }) => {
  const [setModalStatus] = useShallowGeneralStore(state => [state.setModalStatus]);
  const { openTab } = useNavigationTabs();

  const hasTaskEnd = Boolean(data?.endTime || false);

  const goToManagement = () => {
    openTab({
      data: {},
      title: data.name as string,
      url: `/dashboard/managementTask/${data.id}`,
    });
  };

  const onDelegateTask = () => {
    if (hasTaskEnd) return;

    setModalStatus({
      id: 'delegate',
      content: { taskId: data?.id, taskTrayId: data?.taskTrayId, title: data?.name, preventCloseTab: true },
    });
  };

  return (
    <>
      <MenuActionList portal className={'z-[100000]'} menuClassName={'z-[100000]'} menuButton={<Button ><CircleEllipsis /></Button>}>
        <MenuItemTable onClick={goToManagement}>
          {/* <Icons.Assigment className='fill-[#1570EF]' /> Gestionar */}
          Gestionar
        </MenuItemTable>
        <MenuItemTable disabled={hasTaskEnd} onClick={onDelegateTask}>
          {/* <Icons.AssigmentReturnedDown className='fill-[#6349FF]' /> Delegar */}
          Delegar
        </MenuItemTable>
      </MenuActionList>
    </>
  );
};
interface ITaskDynamicTableProps {
  columns: any[];
  data: any[];
  isLoading?: boolean;
}

export const TaskDynamicTable = ({ columns, data, isLoading }: ITaskDynamicTableProps) => {
  return (
    <div className='col-span-3 @[1100px]:col-span-3 @[1250px]:col-span-4'>
      <DataTable<TaskListVariables> isLoading={isLoading} columns={columns} data={data} />
    </div>
  );
};
