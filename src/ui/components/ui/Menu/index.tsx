import { MenuAlign, MenuDirection, Menu as MenuInner, MenuItem as MenuItemInner, MenuPosition, MenuViewScroll, type MenuItemProps, type MenuProps, MenuButton } from '@szhsin/react-menu';
import menuStyles from './menu.module.css'
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { CircleEllipsis } from 'lucide-react';

export interface ICustomeMenuSzh {
  viewScroll?: MenuViewScroll;
  position?: MenuPosition;
  direction?: MenuDirection;
  align?: MenuAlign;
  boundingBoxPadding?: string;
}

interface IMenuListProps extends MenuProps {}

export const MenuList = ({ menuClassName, transition = true, ...props }: IMenuListProps) => {
  return <MenuInner transition={transition} menuClassName={cn(menuStyles.menu__inner, menuClassName)} {...props} />;
};

interface IMenuItemProps extends MenuItemProps {}

export const MenuItem = forwardRef(({ className, ...props }: IMenuItemProps, ref) => {
  return <MenuItemInner ref={ref} className={({ disabled, hover }) => cn(menuStyles.menu__item, className, { '!text-disabled': disabled, '!bg-primary-purple/20': hover })} {...props} />;
});

interface IMenuActionListProps extends MenuProps {}

export const MenuActionList = ({ menuClassName, transition = true, ...props }: IMenuActionListProps) => {
  return <MenuInner transition={transition} menuClassName={cn(menuStyles.menu__action__list, menuClassName)} {...props} />;
};

export const MenuItemTable = ({ className, ...props }: IMenuItemProps) => {
  return <MenuItemInner className={({ disabled, hover }) => cn(menuStyles.menu__item__table, className, { '!text-disabled': disabled, '!bg-stone-300': hover })} {...props} />;
};

export const MenuDotsActions = ({ menuClassName, transition = true, ...props }: Omit<IMenuListProps, 'menuButton'>) => {
  return (
    <MenuInner transition={transition} menuClassName={cn(menuStyles.menu__inner, menuClassName)} menuButton={
      <MenuButton>
        <CircleEllipsis className='fill-stroke-dark' />
        
      </MenuButton>
    } {...props} />
  )
}