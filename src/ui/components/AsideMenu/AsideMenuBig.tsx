"use client"
import { Fragment, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useGeneral } from '@/stores';
import { useClickOutside } from '@/hooks';
import { X } from 'lucide-react';
import { getRoutesByTypeOfUser } from '@/domain/routes.config';
import { RenderIf } from '@/utils/components';
import { AsideMenuItemBig } from './AsideMenuItemBig';
import { AsideMenuSubItemBig } from './AsideMenuSubItemBig';

export const AsideMenuBig = () => {
  const setIsMenuOpen = useGeneral(state => state.setIsOpenMenu);
  const ref = useClickOutside(() => { setIsMenuOpen(false) })
  const firstTaskInbox = useGeneral(state => state.firstTaskInbox);

  const [searchNavRoute, setSearchNavRoute] = useState<string>("");

  const navRoutesByUserType = getRoutesByTypeOfUser();

  const navRoutesToShow = searchNavRoute.length > 0 ? navRoutesByUserType.filter(navRoute => navRoute.title.toLocaleLowerCase().includes(searchNavRoute.toLocaleLowerCase())) : navRoutesByUserType

  // 8: 33 - 8: 50

  return (
    <>
      {/* <motion.div initial="initial" animate="animate" exit="end" variants={menuBigVariant} style={{ height: 'calc(100vh - 104px)' }} className='w-80 px-2 py-4 sidebar absolute top-[104px] bg-stone-200 flex-col justify-start items-start gap-4 inline-flex'> */}

      <div ref={ref} className='inline-flex w-full items-center justify-around gap-2 self-stretch px-1 py-3'>
        <div className='flex h-10 max-w-[80%] items-center justify-end gap-5 rounded-3xl border border-zinc-800 bg-white py-0.5 pl-5 pr-0.5'>
          <input onChange={(e) => { setSearchNavRoute(e.target.value) }} value={searchNavRoute} className=' my-auto w-full text-base font-medium leading-tight text-zinc-400 focus:outline-none' placeholder='Buscar...' />
          <div className='flex w-9 items-center justify-center gap-2.5 rounded-3xl bg-zinc-800 p-2.5'>
            {/* <Icons.Search className='fill-white' /> */}
          </div>
        </div>

        <div className='w-px rotate-180 self-stretch  bg-black'></div>

        <X className='h-6 w-6 cursor-pointer fill-black pr-2' onClick={() => setIsMenuOpen(false)} />
      </div>

      <div className='mx-auto mb-2 h-px w-[95%] rotate-180 border border-neutral-700'></div>

      {/* MenuBigItem */}

      <RenderIf condition={Boolean(firstTaskInbox)}>
        <AsideMenuItemBig {...firstTaskInbox!} />
      </RenderIf>


      {navRoutesToShow.map(route => (
        <Fragment key={route.title}>{route.children ? <AsideMenuSubItemBig route={route} /> : <AsideMenuItemBig {...route} />}</Fragment>
      ))}

     
    </>
  );
};

