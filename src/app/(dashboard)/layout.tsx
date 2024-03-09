import { AsideMenu, TabsContainer, TopBar } from '@/ui/composables';
import React from 'react'

interface IPrivateLayoutProps {
  children: React.ReactNode;
}

const PrivateLayout = ({ children }: IPrivateLayoutProps) => {
  return (
    <div style={{ display: 'grid' }} className={'private__layout__container  relative util__scroll '}>
      {/* TOP BAR */}
      <TopBar />

      {/* TAB CONTAINER */}
      <TabsContainer />

      {/* Aside Menu */}
      <AsideMenu />

      {/* <RenderIf condition={isDashboardRoute}>
        <ToggleGraphics />
      </RenderIf> */}

      {/* <AnimatePresence mode='wait'> */}
          {/* <motion.div transition={{ ease: 'easeInOut' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ gridArea: 'main-content' }}> */}
        <div style={{ gridArea: 'main-content' }}>
          {/* <motion.div  className='w-full h-full' key={currentRoute} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}> */}
          {children}
          {/* </motion.div> */}
        </div>
      {/* </AnimatePresence> */}
      
    </div>
  )
}

export default PrivateLayout