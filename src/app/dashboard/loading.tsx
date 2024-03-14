import React from 'react'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='flex px-2'>
        <div
          style={{
            width: 236,
            height: '95%',
            minHeight: 'calc(90vh - 112px)',
            paddingLeft: 1,
          }}
          className='loader rounded-md mt-5'
        />

        <div className='flex w-full flex-col pb-5 '>
          <div className='mt-5 grid w-full grid-cols-4 gap-2.5 px-8'>
            <div className='loader col-start-1 col-end-2 min-h-80 w-full rounded-md' />
            <div className='loader col-start-2 col-end-4 min-h-80 w-full rounded-md' />
            <div className='loader col-start-4 col-end-5 min-h-80 w-full rounded-md' />
          </div>
        </div>
      </div>
    )
  }