import { FilterTypeGraphics, useFrequencyPolygonGraphicQuery } from "@/remote/gql-generated";
import { serverFetch } from "@/remote/query-utils";
import { LineChartDashboardByDefinitionKey } from "./LineChart";

interface IServerLineChart {
  definitionKey: string
}

export const ServerLineChart = async ({ definitionKey }: IServerLineChart) => {
  const data = await serverFetch(useFrequencyPolygonGraphicQuery, {
    variables: {
      frequencyPolygonGraphicInput: {
        definitionKey,
        filterType: FilterTypeGraphics.Monthly,
        currentDate: {
          startedAfter: "2024-01-01T09:54:00.000-0500",
          startedBefore: "2024-12-31T09:54:00.000-0500"
        }
        
      }
    },
  });

  return (
    <LineChartDashboardByDefinitionKey data={data} />
  )

}