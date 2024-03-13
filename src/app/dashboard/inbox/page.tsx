import { useMyUserTaskTraysQuery } from '@/remote/gql-generated'
import { serverFetch } from '@/remote/query-utils'
import { ServerSideCalendarTasks } from '@/ui/features/dashboard/Calendar'
import { ServerLineChart } from '@/ui/features/dashboard/LineChart'
import { ServerSidePieChart } from '@/ui/features/dashboard/PieChart'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

const InboxPage = async () => {
  const userTaskTrays = await serverFetch(useMyUserTaskTraysQuery);

  if((userTaskTrays?.myUserTaskTrays || []).length > 0) {
    redirect(`/dashboard/inbox/${userTaskTrays?.myUserTaskTrays[0].definitionKey}`)
  } else {

    return <>No hay bandejas</>
  }
}

export default InboxPage