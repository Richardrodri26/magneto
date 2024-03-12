import { ServerSideCalendarTasks } from '@/ui/features/dashboard/Calendar'
import { ServerLineChart } from '@/ui/features/dashboard/LineChart'
import { ServerSidePieChart } from '@/ui/features/dashboard/PieChart'
import React, { Suspense } from 'react'

const InboxPage = async () => {


  return (
    <div className='grid grid-cols-4 gap-2 w-full'>

      <div className='card col-start-1 col-end-2 min-h-80 bg-white'>
        <Suspense fallback={<div className='w-full h-full loader' />} >
          <ServerSidePieChart definitionKey='PQRS' />
        </Suspense>
      </div>

      <div className='card col-start-2 col-end-4 min-h-80 bg-white'>
        <Suspense fallback={<div className='w-full h-full loader' />} >
          <ServerLineChart definitionKey='PQRS' />
        </Suspense>
      </div>

      <div className='card col-start-4 col-end-5 min-h-80 bg-white'>
        <Suspense fallback={<div className='w-full h-full loader' />} >
          <ServerSideCalendarTasks definitionKey='PQRS' />
        </Suspense>
      </div>

    </div>
  )
}

export default InboxPage