"use client"
import { AnimatePresence, motion } from 'framer-motion'

export const AsideMenu = () => {
  // const isOpenMenu = useGeneral(state => state.isOpenMenu);

  return (
    <div style={{ gridArea: 'sidebar' }}>
      <AnimatePresence>
        {/* <motion.aside custom={isOpenMenu} variants={menuNavVariants} animate={'open'} initial={false}> */}
        <motion.aside  animate={'open'} initial={false}>
          {/* {isOpenMenu ? <AsideMenuBig /> : <AsideMenuSmall />} */}
        </motion.aside>
      </AnimatePresence>
    </div>
  );
};