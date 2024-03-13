"use client"
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'
import { menuNavVariants } from './variant';
import { RenderIf } from '@/utils/components';
import { useGeneral } from '@/stores';
import { AsideMenuBig } from './AsideMenuBig';
import { AsideMenuSmall } from './AsideMenuSmall';
import { useGetFromStore } from '@/stores/zustandUtils';

export const AsideMenu = () => {
  const isOpenMenu = useGetFromStore(useGeneral, (state => (state.isOpenMenu)));

  return (
    // <div style={{ gridArea: 'sidebar', zIndex: isOpenMenu ? 30 : 1 }}>
    <div style={{ gridArea: 'sidebar', }}>
      <AnimatePresence>
        <motion.aside custom={isOpenMenu} variants={menuNavVariants} animate={'open'} initial={false}>
          {isOpenMenu ? <AsideMenuBig /> : <AsideMenuSmall />}
        </motion.aside>
      </AnimatePresence>

      <RenderIf condition={isOpenMenu || false}>
          <p className='fixed bottom-0 left-0 z-[10000]'>ver. 0.0.1</p>
      </RenderIf>
    </div>
  );
};
