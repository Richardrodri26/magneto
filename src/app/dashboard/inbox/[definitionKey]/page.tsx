import { ServerLineChart, ServerSideCalendarTasks, ServerSidePieChart } from '@/ui/features'
import React, { Suspense } from 'react'

interface Props {
  params: {
    definitionKey: string
  }
}

const InboxByDefinitionKey = ({ params }: Props) => {
  const { definitionKey } = params

  return (
    <div className='grid grid-cols-4 gap-2 w-full'>

      <div className='card col-start-1 col-end-2 min-h-80 bg-white'>
        <Suspense fallback={<div className='w-full h-full loader rounded-md' />} >
          <ServerSidePieChart definitionKey={definitionKey} />
        </Suspense>
      </div>

      <div className='card col-start-2 col-end-4 min-h-80 bg-white'>
        <Suspense fallback={<div className='w-full h-full loader rounded-md' />} >
          <ServerLineChart definitionKey={definitionKey} />
        </Suspense>
      </div>

      <div className='card col-start-4 col-end-5 min-h-80 bg-white'>
        <Suspense fallback={<div className='w-full h-full loader rounded-md' />} >
          <ServerSideCalendarTasks definitionKey={definitionKey} />
        </Suspense>
      </div>

    </div>
  )
}

export default InboxByDefinitionKey