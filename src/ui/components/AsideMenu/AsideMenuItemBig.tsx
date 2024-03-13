import { INavRoute } from "@/domain/routes.config";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";



export const AsideMenuItemBig = ({ icon, title, url, searchTag }: INavRoute & { searchTag?: string }) => {
    // const IsActiveItem = useRouterState().location.pathname === url;
    // const { openTab } = useNavigationTabs();
  
    // const Icon = Icons[icon || 'AccountTree'];
  
    return (
      <motion.div
        transition={{ delay: 0.15 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        // onClick={() => openTab({ title: title, url: url, data: {}, searchTag: searchTag })}
        className={cn('inline-flex w-[300px] items-start justify-start gap-2 rounded px-4 py-2.5 [&>svg]:fill-stroke-dark', {
        //   'text-primary-purple [&>svg]:fill-primary-purple-1': IsActiveItem,
        })}>
        {/* <Icon /> */}
        <div className="shrink grow basis-0 self-stretch font-['Montserrat'] text-base font-medium leading-tight">{title}</div>
        {/* <Icons.Arrow className={cn({ 'rotate-180': IsActiveItem })} /> */}
      </motion.div>
    );
  };
  