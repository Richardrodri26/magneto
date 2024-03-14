"use client"
import { useGeneral } from "@/stores";
import { TabItem } from "@/ui/components/TabItem";
import { AnimatePresence, Reorder } from "framer-motion";

export const TabsContainer = () => {
  const tabs = useGeneral(state => state.tabs);
  const setTabs = useGeneral(state => state.setTabs);


  return (
    <div style={{ gridArea: "Tab" }} className='w-full min-h-12 px-10 bg-neutral-700 justify-between items-center inline-flex'>
      {/* TAB */}

      <div className='flex h-full'>
        <AnimatePresence>
          <Reorder.Group className='flex h-full mt-auto' axis='x' values={tabs} onReorder={setTabs}>
            {tabs?.map((tab, index) => (
              <Reorder.Item className='first:ml-8 h-full mt-auto flex justify-end items-end' key={index} value={tab}>
                <TabItem key={tab.title} {...tab} />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </AnimatePresence>
      </div>

      <div className='px-2.5 py-2.5 rounded-full bg-white'>
        {/* <Icons.Search className='fill-black ml-auto' /> */}
      </div>
    </div>
  );
};
