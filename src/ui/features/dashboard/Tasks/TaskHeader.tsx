"use client"

import { cn } from "@/lib/utils";
import { Label, Switch, ToggleView } from "@/ui/components";
import { OrderColumnDynamicTable } from "@/ui/components/DataTable/components/OrderColumn";
import { useDynamicTableContext } from "@/ui/components/DataTable/context";
import { RenderIf } from "@/utils/components";
import { delay } from "@/utils/functions";
import { RefreshCcw } from "lucide-react";
import { useState } from "react";

interface ITaskToolBarProps {
  viewState: {
    setter: React.Dispatch<React.SetStateAction<boolean>>;
    value: boolean;
  };
  switchState: {
    setter: React.Dispatch<React.SetStateAction<boolean>>;
    value: boolean;
  };
  visibilityState: {
    value: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const TaskToolBar = ({ switchState, viewState, visibilityState }: ITaskToolBarProps) => {
  // const ref = useRef(null);
  const { value: switchValue, setter: setSwitchValue } = switchState;
  const { value: gridView, setter: setGridView } = viewState;
  const [refetchData] = useDynamicTableContext(state => state.refetchData);
  const [loading] = useDynamicTableContext(state => state.loading);
  const [toggle, setDynamicTableContext] = useDynamicTableContext(state => state.toggle);

  const [dataLoading, setDataLoading] = useState(false);

  const toggleSwitch = () => {
    setDynamicTableContext(state => {
      state.toggle = !(state.toggle || false);
    });
  };

  const toggleGridView = () => {
    setGridView(!gridView);
  };

  const switchLabel = toggle ? 'Mostrar Resueltos' : 'Ocultar Resueltos';
  const switchTitle = toggle ? 'tareas pendientes' : 'todas las tareas';

  const reloadData = () => {
    // apolloClient.cache.evict({ fieldName: "taskListsByProcessDefinition" })
    
    // apolloClient.cache.evict({ fieldName: "frequencyPolygonGraphic" })
    // apolloClient.cache.evict({ fieldName: "calendarData" })
    // apolloClient.cache.evict({ fieldName: "pastelGraphic" })
    // apolloClient.cache.evict({ fieldName: "statistics" })


    setDataLoading(true);
    delay(1000).then(() => {
      setDataLoading(false);
    });

  };

  return (
    <div className='col-span-4 inline-flex h-10 items-center justify-between rounded-lg bg-stone-200 pl-4 pr-8 @[1100px]:col-span-3 @[1250px]:col-span-4'>
      <div className='flex items-center justify-start gap-4'>
        <div
          
          className="font-['Montserrat'] text-xl font-semibold leading-loose text-zinc-800">
          Tareas
        </div>

        <RefreshCcw onClick={() => reloadData()} className={cn('cursor-pointer fill-stroke-dark', { 'animate-spin': loading || dataLoading })} />
      </div>

      <RenderIf condition={!gridView}>
        <OrderColumnDynamicTable />
      </RenderIf>

      <div className='flex items-center justify-start gap-4'>
        <p className='mr-1'>
          Estas viendo <span className='underline'>{switchTitle}</span>
        </p>

        <Label id="switch">{switchLabel}</Label>
        <Switch id="switch" onCheckedChange={toggleSwitch} checked={toggle} />

        <ToggleView isCheck={gridView} toggleCheck={toggleGridView} />
      </div>
    </div>
  );
};
