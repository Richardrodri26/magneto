"use client"
import { useEffect, useState } from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { motion } from 'framer-motion';
import { TaskListVariables, useTaskListsByProcessDefinitionQuery } from '@/remote/gql-generated';
import { formatDate } from '@/utils/functions';
import { DynamicTableProvider, useDynamicTableContext } from '@/ui/components/DataTable/context';
import { Tag } from '@/ui/components';
import { TaskDynamicTable, TaskTableMenuActionTd } from './TaskTable';
import { TaskToolBar } from './TaskHeader';
import { useGeneral, useNavigationTabs } from '@/stores';
import { useParams, useRouter } from 'next/navigation';

const columnHelpByTrayId = createColumnHelper<TaskListVariables>();

const columnsTasksByTrayId = [
  columnHelpByTrayId.display({
    id: 'Acciones',
    cell: info => <TaskTableMenuActionTd data={info.row.original} index={info.row.index} />,
    meta: {
      left: 'left-0',
      isAction: true,
    },
    enableHiding: false,
  }),

  columnHelpByTrayId.accessor('name', {
    id: 'Nombre de la Tarea',
    header: () => {
      return 'Nombre de la Tarea';
    },
  }),

  columnHelpByTrayId.accessor('description', {
    id: 'Descripción de la Tarea',
    header: () => {
      return 'Descripción de la Tarea';
    },
    cell: info => {
      return info.getValue() || 'No hay información de "Descripción de la tarea"';
    },
  }),

  columnHelpByTrayId.accessor('startTime', {
    id: 'Fecha de Creación de la Tarea',
    header: () => {
      return 'Fecha de Creación de la Tarea';
    },

    cell: info => {
      return <p className='capitalize-first'>{formatDate(info.getValue())}</p>;
    },
  }),

  // columnHelpByTrayId.accessor('variablesValues.status', {
  //   id: 'variablesValues.status',
  //   header: () => {
  //     return 'Estado';
  //   },
  // }),

  columnHelpByTrayId.accessor('clout', {
    id: 'Peso de la Tarea',
    header: () => {
      return 'Peso de la Tarea';
    },
  }),
];

// 8: 19 - 8: 37

// 8: 38 - 8: 52

interface IManagementTaskProps {
  showGraphics: boolean;
}

export const ManagementTask = ({ showGraphics }: IManagementTaskProps) => {
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [gridView, setGridView] = useState<boolean>(false);
  const [visibilityColumnsBox, setVisibilityColumnsBox] = useState(false);

  return (
    <motion.div
      // initial={{
      //   opacity: 0.8,
      // }}
      animate={{
        // y: showGraphics ? 0 : [-250, -300, -310, 0] ,
        transition: {
          delay: showGraphics ? 0 : 0.2,
          duration: showGraphics ? 0.1 : 0.3,
          type: 'spring',
        },
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      // layout='position'
      className='mt-5 col-span-4 grid w-full grid-cols-1  gap-2.5 px-8 transition-all @[1100px]:grid-cols-3 @[1250px]:grid-cols-4'>

      {/* <DynamicTableProvider defaultValue={{ columns: columnsTasksByTrayId as any[], take: 5, skip: 0 }}> */}
      <DynamicTableProvider defaultValue={{ columns: (columnsTasksByTrayId as any[]), take: 99999, skip: 0 }}>
        <>
          <TaskToolBar
            viewState={{ setter: setGridView, value: gridView }}
            switchState={{ setter: setSwitchValue, value: switchValue }}
            visibilityState={{ setter: setVisibilityColumnsBox, value: visibilityColumnsBox }}
          />

          <TaskListRenderByVisualType gridView={gridView} columns={columnsTasksByTrayId} />
        </>
      </DynamicTableProvider>
    </motion.div>
  );
};

interface ITaskRenderContentByVisualType {
  gridView: boolean;
  columns: any[];
}

const TaskListRenderByVisualType = ({ columns, gridView }: ITaskRenderContentByVisualType) => {

  const setFirstTaskInbox = useGeneral(state => state.setFirstTaskInbox);
  const incrementCountErrorDashboard = useGeneral(state => state.incrementCountErrorDashboard);
  const logout = useGeneral(state => state.logout);
  const setCountErrorDashboard = useGeneral(state => state.setCountErrorDashboard);
  
  const countErrorDashboard = useGeneral(state => state.countErrorDashboard);
  const router = useRouter();

  const { definitionKey } = useParams();
  const [toggle, setDynamicTableData] = useDynamicTableContext(state => state.toggle);
  const { closeCurrentTab } = useNavigationTabs()

  const { data, isLoading, refetch } = useTaskListsByProcessDefinitionQuery({
    definitionKey: `${definitionKey}`,
    unfinished: toggle || false,
  
  });



  useEffect(() => {

    if(countErrorDashboard >= 3) {
      // setTabs(tabs?.filter(tab => tab.title !== "Bandeja de Tareas"))
      // setPrevTab(undefined)
      // closeCurrentTab()
      logout()
    }
    
  }, [countErrorDashboard])

  // 8: 30 - 8: 52

  const firstItem = data?.taskListsByProcessDefinition[0];

  const variablesToShow = (Object.entries(firstItem?.hasShowVariables || {})?.map(([key, value]) => (value ? key : null)) || []).filter(Boolean);

  const variableColumns = variablesToShow
    .filter(item => typeof item === 'string')
    ?.map(item => {
      return columnHelpByTrayId.accessor(`variablesValues.${item}`, {
        id: item ? `${item}` : '',
        header: info => {
          const label = firstItem?.variablesValues[item || '']?.label;
          return label || item || 'Sin header';
        },
        cell: info => {
          const data = info.row.original.variablesValues;

          const itemValue = data[item || '']?.value;

          const isTag = item === 'Estado';
          const variableData = JSON.parse(data[item || '']?.parameters || '{}');
          const tagData = variableData?.tags || { '': { bgColor: '#f4f4f5', textColor: '#52525b' } };

          const tagConfig = tagData[itemValue || ''] as Record<string, string>;

          return isTag ? (
            <Tag
              styles={{ backgroundColor: tagConfig?.bgColor }}
              className='mx-auto w-fit'
              textStyles={{ color: tagConfig?.textColor }}
              title={tagConfig?.tagShowName || itemValue}
              variants={{ variant: 'blank' }}
            />
          ) : (
            itemValue || `No hay información de esta columna`
          );
        },
      });
    });

  const variableGroupColumns = columnHelpByTrayId.group({
    header: 'Variables del formulario',
    columns: variableColumns,
    meta: {
      styles: 'text-center border-b border-primary-purple-1',
    },
  });

  useEffect(() => {
    if (data) {
      setDynamicTableData(draft => {
        draft.tableData = data.taskListsByProcessDefinition;
      });
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      setDynamicTableData(state => {
        state.columns = [...columns, variableGroupColumns];
      });

    }
  }, [data]);

  // if (!data && loading) return <></>;
  if (!data?.taskListsByProcessDefinition) return <div className='loader col-span-4 h-52 w-full rounded-md ' />;


  return gridView ? (
    <></>
    // <TaskCardGrid key={(data?.taskListsByProcessDefinition || []).length} isLoading={!tasksData} data={data?.taskListsByProcessDefinition || []} />
    // <TaskCardGrid key={(data?.taskListsByProcessDefinition || []).length} isLoading={loading} data={data?.taskListsByProcessDefinition || []} />
  ) : (
    // <TaskDynamicTable key={(data?.taskListsByProcessDefinition || []).length} isLoading={!tasksData} data={tasksData?.taskListsByProcessDefinition || []} columns={taskDataVariableColumns || [...columns, variableGroupColumns]} />
    <TaskDynamicTable
      key={(data?.taskListsByProcessDefinition || []).length}
      isLoading={isLoading}
      data={data?.taskListsByProcessDefinition || []}
      columns={[...columns, variableGroupColumns]}
    />
  );
};
