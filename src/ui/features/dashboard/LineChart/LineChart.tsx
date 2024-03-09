"use client"

import { FilterTypeGraphics, FrequencyPolygonGraphicQuery } from "@/remote/gql-generated";
import { ChangeEvent, useState } from "react";
import { Payload } from 'recharts/types/component/DefaultLegendContent';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const CustomizedAxisTick = ({ x, y, payload }: { x: number; y: number; stroke: string; payload: { value: string } }) => {
  return (
    <g className='text-[10px]' transform={`translate(${x},${y})`}>
      {/* <text x={0} y={0} dy={16} textAnchor='end' fill='#666' transform='rotate(-35)'> */}
      <text x={0} y={0} dy={16} textAnchor='end' fill='#666'>
        {payload.value}
      </text>
    </g>
  );
};

interface ILineChartDashboardByDefinitionKeyProps {
  data?: FrequencyPolygonGraphicQuery
}

export const LineChartDashboardByDefinitionKey = ({ data }: ILineChartDashboardByDefinitionKeyProps) => {
  
  const [filtertype, setFiltertype] = useState<FilterTypeGraphics>(FilterTypeGraphics.Monthly);
  const [opacityState, setOpacity] = useState({
    opacity: {
      uv: 1,
      pv: 1,
    },
  });

  // console.log('rangeDate', rangeDate)

  const onChangeFilterType = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    setFiltertype(value as FilterTypeGraphics);
  };

  const handleMouseEnter = (o: Payload) => {
    const { dataKey } = o;
    const { opacity } = opacityState;

    // console.log('dataKey', dataKey)

    if (dataKey) {
      setOpacity({
        opacity: { ...opacity, [dataKey as string]: 0.5 },
      });
    }
  };

  const handleMouseLeave = (o: Payload) => {
    const { dataKey } = o;
    const { opacity } = opacityState;

    setOpacity({
      opacity: { ...opacity, [dataKey as string]: 1 },
    });
  };

  const dataToMap = data?.frequencyPolygonGraphic;
  
  return (
    <>
      {/* <div className='flex items-center gap-2'>
        <Select onChange={onChangeFilterType} value={filtertype} className='w-[100px] border-transparent cursor-pointer' optionsEntries={['Key', 'Value']} selectOptions={filterTypeOptions} />

        <CalendarMultipleSelectionPopover mode='range' onSubmitDate={setFinalRangeDate} rangeDateState={{ setter: setRangeDate, state: rangeDate }}>
          <div className='p-1 border border-slate-300 rounded-md'>
            {dayjs(finalRangeDate?.from).format('DD/MM/YYYY')} - {dayjs(finalRangeDate?.to).format('DD/MM/YYYY')}
          </div>
        </CalendarMultipleSelectionPopover>
      </div> */}

      <div style={{ width: '100%', height: 300 }} className='relative h-full w-full'>
        <ResponsiveContainer>
          <LineChart margin={{ top: 5, right: 0, bottom: 11, left: -35 }} data={dataToMap}>
            <CartesianGrid stroke='#ccc' strokeDasharray='3 3' />
            <XAxis angle={45} padding={{ left: 20, right: 0 }} dataKey='key' tick={CustomizedAxisTick} />
            <YAxis />

            <Legend align='right' verticalAlign='top' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />

            <Line type='monotone' dataKey='currentDate' strokeOpacity={opacityState.opacity.pv} stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line strokeDasharray='3 3' type='monotone' dataKey='lastDate' strokeOpacity={opacityState.opacity.uv} stroke='#82ca9d' />

            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}