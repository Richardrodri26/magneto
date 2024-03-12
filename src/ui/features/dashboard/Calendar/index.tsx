import { serverFetch } from "@/remote/query-utils"
import { CalendarTaskWidget } from "./Calendar"
import { FilterTypeCalendar, useCalendarDataQuery } from "@/remote/gql-generated"
import { getFirstLastDayOfMonthFormatted } from "@/utils/functions"

interface IServerSideCalendarTasks {
  definitionKey: string;
}

export const ServerSideCalendarTasks = async ({ definitionKey }: IServerSideCalendarTasks) => {
  const data = await serverFetch(useCalendarDataQuery, {
    variables: {
      calendarDataInput: {
        definitionKey: definitionKey,
        filterType: FilterTypeCalendar.DueDate,
        dateAfter: getFirstLastDayOfMonthFormatted(new Date()).firstDay,
        dateBefore: getFirstLastDayOfMonthFormatted(new Date()).lastDay,
      },
    }
  })


  return (
    <CalendarTaskWidget data={data} />
  )
}