"use client"

import { INavRoute } from "@/domain/routes.config";
import { cn } from "@/lib/utils";
import { ITabItemProps } from "@/stores";
import { ControlledMenu, MenuItem, SubMenu, useHover, useMenuState } from "@szhsin/react-menu";
import { Inbox } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

/**
 * Menu Item for AsideBar Menu
 * @param param0
 * @returns
 */
export const SmallMenuItem = ({ menuOption }: { menuOption: ITabItemProps & { children?: INavRoute[] } }) => {
    const ref = useRef(null);
    const [menuState, toggle] = useMenuState({ transition: true });
    const { anchorProps, hoverProps } = useHover(menuState.state, toggle);

    const router = useRouter()
  
    // const isActiveItem = useRouterState().location.pathname === menuOption?.url;
    // const { openTab } = useNavigationTabs();
  
    // const Icon = Icons[menuOption?.icon || 'AddHome'];
  
    return (
      <div ref={ref} {...anchorProps} className='h-10 mb-2 hover:cursor-pointer flex justify-center items-center mx-auto group'>
        <div
          onClick={e => {
            e.stopPropagation();
            router.push(menuOption.url)
            // openTab({ ...menuOption });
          }}
          className={cn(`[&>svg]:mx-auto [&>svg]:h-6 hover:cursor-pointer group-hover:text-white group-hover:bg-magneto-primary p-2 rounded-lg transition-all [&>svg]:fill-stroke-dark`, {
            // '[&>svg]:fill-primary-purple': isActiveItem,
          })}>
          {/* {NavBarMenuIconsController[`${menuOption.key}`]} */}
          {/* <Icon /> */}
          <Inbox />

        </div>
  
        <ControlledMenu
          className={'select-none text-sm p-0 [&>ul]:p-0'}
          {...hoverProps}
          {...menuState}
          anchorRef={ref}
          align='center'
          direction='right'
          boundingBoxPadding='0 0 0 60'
          onClose={() => toggle(false)}>
          {menuOption?.children ? (
            <SubMenu align='end' label='Opciones'>
              
              {menuOption?.children.map(option => (
                <MenuItem onClick={() => {
                //   openTab({
                //     data: {},
                //     title: option.title,
                //     url: option.url,
                //     icon: option.icon
                //   })
                  
                }} key={option.title}>
                  <Link href={option.url}>
                  {option.title}  
                  </Link>
                  </MenuItem>
              ))}
  
            </SubMenu>
          ) : (
            <MenuItem
              className={'!p-0 hover:bg-magneto-primary-opacity'}
              onClick={() => {
                // openTab({ ...menuOption });
              }}>
              <Link
                href={menuOption.url}
                // activeProps={{
                //   className: 'text-primary bg-primary-opacity',
                // }}
                className={`[&>svg]:mx-auto [&>svg]:h-6 hover:text-magneto-magneto-primary p-2 w-full`}>
                {menuOption.title}
              </Link>
            </MenuItem>
          )}
        </ControlledMenu>
      </div>
    );
  };