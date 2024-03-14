"use client"
import { motion } from 'framer-motion';
import styles from './toggleView.module.css';
import { cn } from '@/lib/utils';
import { LayoutGrid, Menu } from 'lucide-react';
import { useShallowGeneralStore } from '@/stores';

interface IToggleViewProps {
  toggleCheck: () => void;
  isCheck: boolean;
  className?: string;
}

/**
 * utility for switching between two states
 * @returns
 */
export const ToggleView = ({ isCheck, toggleCheck, className }: IToggleViewProps) => {
  return (
    <>
      <div className={cn(styles.toggle__container, className)} onClick={toggleCheck}>
        <div data-true={`${!isCheck}`}>
        <Menu className={cn('h-3 w-3', { 'fill-stroke-dark': isCheck })} />
        </div>
        <div data-true={`${isCheck}`}>
        <LayoutGrid className={cn('h-3 w-3', { 'fill-stroke-dark': !isCheck })} />
        </div>
      </div>
    </>
  );
};

export const ToggleGraphics = () => {
  const [showGraphics, setShowGraphics] = useShallowGeneralStore(state => [state.showGraphics, state.setShowGraphics]);

  // const Icon = Icons[showGraphics ? 'NoImage' : 'Image'];

  const toggleShowGraphics = () => {
    setShowGraphics(!showGraphics);
  };
  return (
    <motion.div
      whileHover={{
        width: 120,
        borderRadius: '27px 10px 10px 27px',
        justifyContent: 'space-between',
      }}
      onClick={toggleShowGraphics}
      className='group fixed right-2 top-44 z-50 flex h-[55px] min-h-10 w-[55px] min-w-10 cursor-pointer items-center justify-center rounded-full bg-[#2B2B2B] p-2'>
      <div className='flex items-center justify-center rounded-full bg-white p-2'>
        {/* <Icon className='fill-[#2B2B2B]' /> */}
      </div>
      <p className='invisible w-0 text-end text-white group-hover:visible group-hover:w-auto'>{showGraphics ? 'Ocultar Gráficas' : 'Mostrar Gráficas'}</p>
    </motion.div>
  );
};

