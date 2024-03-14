import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import { useMemo } from 'react';


interface IEmptyBodyGridProps {
  length: number;
}

export const EmptyBodyGrid = ({ length }: IEmptyBodyGridProps) => {
  return (
    <tr className='h-36 border-b border-slate-100'>
      <td className={cn('w-full items-center whitespace-nowrap bg-white px-5')} colSpan={length}>
        <div className='flex flex-col items-center justify-center gap-3'>
        <Info className='h-[40px] w-[40px] fill-primary-purple' />
          <label>No se encontraron elementos</label>
        </div>
      </td>
    </tr>
  );
};

export const ErrorBodyGrid = () => {
  return (
    <tr className='h-36 border-b border-slate-100'>
      <td className={cn('w-full items-center whitespace-nowrap bg-white px-5')} colSpan={length}>
        <div className='flex flex-col items-center justify-center gap-3'>
          <Info className='h-[40px] w-[40px] fill-red-500' />
          <label>¡Oops, hubo un error en la consulta!</label>
        </div>
      </td>
    </tr>
  );
};

interface ILoadingBodyGridProps {
  columnLenght: number;
}

export const LoadingBodyGrid = ({ columnLenght }: ILoadingBodyGridProps) => {
  const arr = useMemo(() => {
    return Array.from({ length: columnLenght }, (_, i) => i + 1) || [];
  }, [columnLenght]);


  return (
    <>
      <tr className=' w-full'>
        {arr.map((_, index) => (
          <td key={index} className='mx-0.5'>
            <div className='loader h-10 my-0.5 w-full' />
          </td>
        ))}
      </tr>
      <tr className='h-10 w-full'>
        {arr.map((_, index) => (
          <td key={index}>
            <div className='loader h-10 my-0.5 w-full' />
          </td>
        ))}
      </tr>
      <tr className='h-10 w-full'>
        {arr.map((_, index) => (
          <td key={index}>
            <div className='loader h-10 my-0.5 w-full' />
          </td>
        ))}
      </tr>
    </>
  );
};
