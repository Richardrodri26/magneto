import { cn } from "@/lib/utils";
import { useGeneral, useNavigationTabs } from "@/stores";
import { RenderIf } from "@/utils/components";
import { motion } from "framer-motion";
import { Inbox, X } from "lucide-react";

export interface ITabItemProps {
  url: string;
  data: any;
  title: string;

  searchTag?: string

  // icon?: IconKeys;
  icon?: string;
 

  
}

// export const TabIcons: Record<string, JSX.Element> = {
//   'Home': <Icons.Home />,
//   '': <Icons.Home />
// }

export const TabItem = ({ data, url, title, icon: TabIcon, searchTag }: ITabItemProps) => {
  const { closeTab, openTab } = useNavigationTabs();
  const currentTabs = useGeneral(state => state.tabs);
  // const matchRoute = useMatchRoute();
  const currentTab = useGeneral(state => state.currentTab);

  const isActiveTab = currentTab?.url.includes(url) && currentTab?.title === title;

  // const isTaskTrayPage = Boolean(matchRoute({ to: "/dashboard/trays/$trayId" }))
  // const currentPageIsTaskTray = url.includes("/dashboard/trays") && isTaskTrayPage; 
  const currentPageIsTaskTray = url.includes("/dashboard/trays"); 


  const onCloseTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();

    closeTab({ data, url, title });
  };

  const onOpenTab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    openTab({ data, url, title, searchTag });
  };

  // const Icon = Icons[(TabIcon as IconKeys) || 'Home']

  return (
      <motion.div layout="position"
        onClick={onOpenTab}
        className={cn(
          'min-w-36 mt-auto h-11 px-5 py-2.5 cursor-pointer rounded-tl-lg rounded-tr-lg justify-start items-center gap-2.5 inline-flex',
          { 'bg-zinc-100 text-black': isActiveTab && !currentPageIsTaskTray },
          { 'bg-neutral-700 text-white': !isActiveTab && !currentPageIsTaskTray },
          { 'bg-zinc-100 text-black': currentPageIsTaskTray },
        )}>


            
          <RenderIf condition={Boolean(TabIcon)}>
            <>
              <div className={cn({ '[&>svg]:fill-[#2B2B2B] h-6 w-6': isActiveTab && !currentPageIsTaskTray }, { '[&>svg]:fill-white': !isActiveTab && !currentPageIsTaskTray }, { '[&>svg]:fill-[#2B2B2B] h-6 w-6': currentPageIsTaskTray })}>
                {/* <Icon /> */}
                <Inbox className="stroke-white" />
              </div>

            </>
          </RenderIf>

        <div
          className={cn(' text-base font-medium leading-normal', {
            'text-zinc-800': isActiveTab,
            'text-white': !isActiveTab,
            'text-zinc-800 ': currentPageIsTaskTray,
          })}>
          {title}
        </div>

        {currentTabs.length == 1 || url === '/dashboard/taskInbox' || url.includes("/dashboard/trays") ? null : (
          <div onClick={onCloseTab} className='cursor-pointer hover:bg-stroke-gray/80 p-1 rounded-full transition-colors'>
            {/* <Icons.Close
            className={cn('h-3.5 w-3.5 ', { 'fill-[#2B2B2B]': isActiveTab && !currentPageIsTaskTray }, { 'fill-white': !isActiveTab && !currentPageIsTaskTray }, { 'fill-[#2B2B2B] ': currentPageIsTaskTray })}
          /> */}
            <X
            className={cn('h-3.5 w-3.5 ', { 'fill-[#2B2B2B]': isActiveTab && !currentPageIsTaskTray }, { 'fill-white': !isActiveTab && !currentPageIsTaskTray }, { 'fill-[#2B2B2B] ': currentPageIsTaskTray })}
          />
          </div>
        )}
      </motion.div>
  );
};
