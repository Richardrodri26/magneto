import { useMyUserTaskTraysQuery } from '@/remote/gql-generated'
import { serverFetch } from '@/remote/query-utils'
import { redirect } from 'next/navigation'
import React from 'react'

const InboxPage = async () => {
  const userTaskTrays = await serverFetch(useMyUserTaskTraysQuery);

  if((userTaskTrays?.myUserTaskTrays || []).length > 0) {
    redirect(`/dashboard/inbox/${userTaskTrays?.myUserTaskTrays[0].definitionKey}`)
  } else {

    return <>No hay bandejas</>
  }
}

export default InboxPage