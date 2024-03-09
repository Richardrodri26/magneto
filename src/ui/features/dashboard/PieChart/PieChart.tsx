"use client";
import { PastelGraphicQuery } from "@/remote/gql-generated";
import { useMemo } from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Props } from "recharts/types/component/DefaultLegendContent";

interface IPieChartByDefinitionKeyProps {
  data?: PastelGraphicQuery;
}

const ColorsBarChart: Record<string, string> = {
  resolved: "#7BCF9A",
  expired: "#F57C7C",
  inProgress: "#FFD794",
  total: "#FAFAFA",
};

interface ICustomLegendProps extends Props {
  total?: number;
}

const CustomLegend = (props: ICustomLegendProps) => {
  const { payload, total } = props;

  // console.log('payload', payload)

  return (
    <ul>
      <li className="flex items-center justify-between gap-1">
        {" "}
        <div className="flex items-center justify-between gap-3">
          <div className="h-3.5 w-3.5 rounded-full bg-slate-300"></div> Total
        </div>{" "}
        <span>{total}</span>
      </li>
      {payload?.map((entry, index) => (
        <li
          className=" flex items-center justify-between gap-1"
          key={`item-${index}`}
        >
          {" "}
          <div className="flex items-center justify-between gap-3">
            <div
              style={{ background: entry.color }}
              className="h-3.5 w-3.5 rounded-full"
            ></div>{" "}
            {entry.value}
          </div>{" "}
          <span>{entry.payload?.value}</span>
        </li>
      ))}
    </ul>
  );
};

export const PieChartByDefinitionKey = ({ data }: IPieChartByDefinitionKeyProps) => {
  const newObj = { ...data?.pastelGraphic?.pastelGraphicAbsolute };
  if (newObj) {
    delete newObj["__typename"];
  }

  const dataToList = Object.keys(newObj || {});

  const { __typename, pastelGraphicAbsolute, pastelGraphicRelative } =
    data?.pastelGraphic || {};

  const { total, __typename: _, ...rest } = pastelGraphicAbsolute || {};

  const dataGraphics = Object.entries(rest || {});

  const dataToSend = dataGraphics?.map(([key, value]) => ({
    name: key,
    value: value,
  }));

  if (!data) return <div className="loader h-80 w-full"></div>;

  return (
    <div className="relative h-full max-h-[300px]  w-full">
      <ResponsiveContainer aspect={undefined} className={"z-10"}>
        <PieChart
          className="relative outline-none"
          barGap={0}
          barCategoryGap={0}
        >
          <Pie
            animationDuration={100}
            legendType="circle"
            startAngle={85}
            endAngle={445}
            cornerRadius={10}
            data={dataToSend}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            spacing={0}
            fill="#8884d8"
            paddingAngle={-8}
            dataKey="value"
          >
            {dataToList?.map((key, index) => {
              return (
                <Cell
                  className="outline-none"
                  key={`cell-${index}`}
                  fill={ColorsBarChart[key]}
                />
              );
            })}
          </Pie>
          <Legend
            content={(props) => CustomLegend({ ...props, total: total || 0 })}
          />
        </PieChart>
      </ResponsiveContainer>

      <p className="w-[80px] h-[50px] text-center absolute inset-1/2 z-10 -translate-x-9 -translate-y-16 text-3xl font-bold text-[#4D4D4D]">
        {Boolean(total) ? <>{pastelGraphicRelative?.resolved}</> : null}
      </p>
    </div>
  );
};
