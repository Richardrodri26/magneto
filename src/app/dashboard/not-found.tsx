import { TypewriterEffect } from '@/ui/components';
import React from 'react'

export default function() {
    const words = [
        {
          text: 'Pagina',
        },
        {
          text: 'no',
        },
        {
          text: 'Encontrada',
        },
        {
          text: '(404)',
          className: 'text-magneto-primary-purple-1',
        },
      ];
  
      return (
        <div className=' flex items-center justify-center text-black'>
          <TypewriterEffect words={words} className='m-auto' />
        </div>
      );
}
