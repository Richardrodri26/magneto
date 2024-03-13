import { useMyUserTaskTraysQuery } from "@/remote/gql-generated"
import { serverPreFetch } from "@/remote/query-utils"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import { SubmenuTaskInbox } from "./ClientSubmenu"


export const SubmenuTaskInboxServerHydration = async () => {
  const queryClient = await serverPreFetch(useMyUserTaskTraysQuery)
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SubmenuTaskInbox />
    </HydrationBoundary>
  )
}