"use client"

import { getHolidaysByYear } from "@/domain/graphql/api";
import { CalendarDataQuery, FilterTypeCalendar, useCalendarDataQuery } from "@/remote/gql-generated";
import { BasicTooltip, CalendarMultipleCustom } from "@/ui/components";
import { formatDate, getFirstLastDayOfMonthFormatted } from "@/utils/functions";
import { useMemo, useState } from "react";

interface ICalendarInfoItem {
  children: React.ReactNode;
  numberDate: number;
  tooltip?: React.ReactNode;
}

const CalendarInfoItem = ({ children, numberDate, tooltip }: ICalendarInfoItem) => {
  return (
    <div className='inline-flex h-7 w-52 items-center justify-start gap-2.5 rounded-bl-sm rounded-br rounded-tl-sm rounded-tr border-l-2 border-zinc-800 bg-zinc-100 py-0.5 pl-0.5 pr-2.5'>
      <BasicTooltip
        content={
          <>
            <div className='flex items-start justify-start gap-2.5 px-1 py-0.5'>
              <div className='flex h-5 items-center justify-center gap-2.5 rounded-full bg-rose-200 p-1'>
                <div className='flex items-center justify-center gap-2.5'>
                  <div className="font-['Work Sans'] text-xs font-medium text-zinc-800">{numberDate}</div>
                </div>
              </div>
            </div>
            <div>{children}</div>
          </>
        }
        tooltip={tooltip}
        tooltipClassName='bg-rose-200'
      />
    </div>
  );
};

interface ICalendarTaskWidget {
  // definitionKey: string;
  data?: CalendarDataQuery 
}

interface Task {
  __typename?: 'TaskListBase' | undefined;
  id: string;
  name?: string | null | undefined;
  description?: string | null | undefined;
  due?: string | null | undefined;
}

interface GroupedData {
  date: string;
  data: Task[];
  dateDate: Date;
}

export const CalendarTaskWidget = ({ data }: ICalendarTaskWidget) => {
  const [selected, setSelected] = useState<Date[] | undefined>();
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const holidaysDate = useMemo(() => {
    const holidaysCurrentYear = getHolidaysByYear(currentMonth.getFullYear()) || [];

    const holidaysDates = holidaysCurrentYear.map(holiday => new Date(holiday.date));

    return holidaysDates;
  }, [currentMonth]);

  if (!data) return <div className='loader h-80 w-full rounded-md' />;

  const dueDates = groupDataByDate(data?.calendarData || []);

  function groupDataByDate(dataList: Task[]): GroupedData[] {
    if (!dataList) {
      return [];
    }

    const grouped: { [key: string]: GroupedData } = {};

    dataList
      .filter(x => x.due)
      .map(element => {
        const dateNoTime = new Date(element.due!);
        dateNoTime.setHours(0, 0, 0, 0);

        const dateString = dateNoTime.toISOString();

        if (!grouped[dateString]) {
          grouped[dateString] = {
            date: dateNoTime.toISOString(),
            dateDate: new Date(element.due!),
            data: [],
          };
        }

        grouped[dateString].data.push(element);
      });

    const result = Object.keys(grouped).map(function (key) {
      return grouped[key];
    });

    return result;
  }

  const uniqueDates = dueDates.map(day => new Date(day.date));

  const onMonthChange = (month: Date) => {
    setCurrentMonth(month);
  };

  return (
    <>
      <CalendarMultipleCustom
        rangeDateState={{ setter: setSelected, state: selected }}
        modifiers={{
          violetDate: holidaysDate,
          creamDate: uniqueDates,
        }}
        month={currentMonth}
        modifiersStyles={{
          violetDate: { color: 'hsla(249, 100%, 64%, 1)' },
          creamDate: { background: 'hsla(9, 100%, 91%, 1)', color: 'black' },
        }}
        onMonthChange={onMonthChange}
      />

      <div className='mt-2 flex flex-col gap-2'>
        {dueDates?.map((item, index, array) => (
          <CalendarInfoItem
            key={index}
            numberDate={item.dateDate.getDate()}
            tooltip={
              <div className='flex flex-col gap-y-2'>
                {item.data.map(task => (
                  <p key={task.id}>{`${formatDate(task.due, 'hh:MM A')} - ${task.name}`}</p>
                ))}
              </div>
            }>
            <span className="font-['Work Sans'] text-sm font-normal leading-none text-neutral-700">Vencen </span>
            <span className="font-['Work Sans'] text-sm font-bold leading-none text-neutral-700">{item.data.length}</span>
            <span className="font-['Work Sans'] text-sm font-normal leading-none text-neutral-700"> Actividad/es</span>
          </CalendarInfoItem>
        ))}
      </div>
    </>
  );
};