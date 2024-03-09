import { ServerLineChart } from '@/ui/features/dashboard/LineChart'
import React, { Suspense } from 'react'

const InboxPage = async () => {


  return (
    <div className='grid grid-cols-4 gap-2'>

      <div className='card col-start-2 col-end-4 min-h-80 bg-white'>
        <Suspense fallback={<div className='w-full h-full loader' />} >
          <ServerLineChart definitionKey='PQRS' />
        </Suspense>
      </div>

    </div>
  )
}

export default InboxPage