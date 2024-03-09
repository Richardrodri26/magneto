import { serverFetch } from "@/remote/query-utils";
import { PieChartByDefinitionKey } from "./PieChart";
import { usePastelGraphicQuery } from "@/remote/gql-generated";

interface IServerSidePieChart {
  definitionKey: string;
}

export const ServerSidePieChart = async ({
  definitionKey,
}: IServerSidePieChart) => {
  const data = await serverFetch(usePastelGraphicQuery, {
    variables: {
      pastelGraphicInput: {
        definitionKey,
      },
    },
  });

  return <PieChartByDefinitionKey data={data} />;
};
