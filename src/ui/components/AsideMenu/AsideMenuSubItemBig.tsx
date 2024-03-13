"use client"
import { INavRoute } from "@/domain/routes.config";
import { useRef } from "react";
import { ControlledMenu, MenuItem, SubMenu, useHover, useMenuState } from '@szhsin/react-menu';
import { motion } from "framer-motion";
import Link from "next/link";

export const AsideMenuSubItemBig = ({ route }: { route: INavRoute }) => {
    const ref = useRef(null);
    const [menuState, toggle] = useMenuState({ transition: true });
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle);
    // const navigate = useNavigate();
    // const { openTab } = useNavigationTabs();
  
    // const Icon = Icons[route.icon || 'AddHome'];
  
    return (
      <>
        <motion.div ref={ref} {...anchorProps} transition={{ delay: 0.15 }} initial={{ opacity: 0 }} animate={{ opacity: 1, zIndex: 1000000 }} exit={{ opacity: 1 }} className='group cursor-pointer'>
          <div
            
  
            // onClick={() => {
            //   openTab({
            //     title: route.title,
            //     url: route.url,
            //     data: {},
            //   });
            // }}
            className={` z-[1000000] inline-flex w-[300px] items-start justify-start gap-2 rounded px-4 py-2.5 [&>svg]:fill-stroke-dark`}>
           
  
            {/* <Icon /> */}
  
            <p className="shrink grow basis-0 self-stretch font-['Montserrat'] text-base font-medium leading-tight">{route.title}</p>
          </div>
  
          <ControlledMenu
            className={'select-none p-0 text-sm [&>ul]:p-0'}
            {...hoverProps}
            {...menuState}
            anchorRef={ref}
            align='center'
            direction='right'
            boundingBoxPadding='0 0 0 60'
            onClose={() => toggle(false)}>
            <div
              className={'!p-0 hover:bg-magneto-primary-lila-light'}
              onClick={() => {
                // navigate({ to: route.url });
              }}>
              {route.children !== undefined ? (
                // <SubMenu align='end' label={route.title}>
                <SubMenu align='end' label={'Opciones'}>
                  {route.children.map(option => {
                    return (
                      <MenuItem
                        onClick={() => {
                          // openTab({
                          //   data: {},
                          //   title: option.title,
                          //   url: option.url,
                          //   icon: option.icon,
                          // });
  
                        }}
                        key={option.title}>
                        {option.title}
                      </MenuItem>
                    );
                  })}
                </SubMenu>
              ) : (
                <Link
                  href={route.url}
                  // activeProps={{
                  //   className: 'text-primary-purple bg-primary-lila-light',
                  // }}
                  className={` w-full p-2 hover:text-magneto-primary-purple`}>
                  {route.title}
                </Link>
              )}
            </div>
          </ControlledMenu>
        </motion.div>
      </>
    );
  };
  