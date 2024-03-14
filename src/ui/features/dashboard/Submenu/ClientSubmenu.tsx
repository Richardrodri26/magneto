"use client";

import { cn } from "@/lib/utils";
import { useMyUserTaskTraysQuery } from "@/remote/gql-generated";
import { useGeneral } from "@/stores";
import { ChevronRightCircle } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export const SubmenuTaskInbox = () => {
  const { data } = useMyUserTaskTraysQuery()
  const setTabs = useGeneral(state => state.setTabs)
  const tabs = useGeneral(state => state.tabs);

  useEffect(() => {
    if(tabs.length === 0) {
      setTabs([{
        data: {},
        title: "Bandeja de Tareas",
        url: `dashboard/inbox/${data?.myUserTaskTrays[0].definitionKey}?filterBy=${data?.myUserTaskTrays[0].id}`
      }])
    }
  }, [])

  return (
    <div
        className='relative mt-3 flex h-[95%] w-[180px] flex-col items-start justify-start gap-2 border-r border-r-[#BABABA] py-4 pr-4 '>
        {/* SubNavigationItem */}

        <div className="flex flex-col gap-2">

          {
            data?.myUserTaskTrays.map((taskTray, index) => (
              <Link key={index} href={`/dashboard/inbox/${taskTray.definitionKey}`}>
                {taskTray.shortTitle}
              </Link>
            ))
          }

        </div>
      

        <div  className={cn('absolute -right-[11px] top-1 z-[3] h-[22px] w-[22px] cursor-pointer bg-[#F2F2F2] transition-all')}>
          <ChevronRightCircle className='fill-[#8D8D8D] ' />
        </div>
      </div>
  )
}