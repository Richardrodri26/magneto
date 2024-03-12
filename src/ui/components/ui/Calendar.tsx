"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DateFormatter, DayPicker, DayPickerRangeProps, SelectMultipleEventHandler } from "react-day-picker"
import '../../../app/date-picker.css'
import { cn } from "@/lib/utils"
import { buttonVariants } from "./Button"
import { formatDateWithLocale } from "@/utils/functions"
import { format } from "date-fns"
import { es } from 'date-fns/locale';

const formatCaption: DateFormatter = (month, options) => {
  return (
    <>
      <p className='capitalize'>{formatDateWithLocale(month, 'MMMM YYYY', options?.locale?.code)}</p>
    </>
  );
};

const formatWeekdayName: DateFormatter = (month, options) => {
  return (
    <>
      <p className='text-xs capitalize text-zinc-600 '>{format(month, 'EEEEE', { locale: options?.locale })}</p>
    </>
  );
};

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

interface ICalendarMultipleCustomProps extends Omit<DayPickerRangeProps, 'captionLayout' | 'mode' | 'onSelect' | 'selected'> {
  rangeDateState: {
    setter: SelectMultipleEventHandler | undefined;
    state: Date[] | undefined;
  };
}

export const CalendarMultipleCustom = ({
  rangeDateState,
  style,
  styles,
  showOutsideDays = true,
  modifiers,
  modifiersStyles,
  disabled,
  weekStartsOn = 0,
  onMonthChange,
  month,
}: ICalendarMultipleCustomProps) => {
  return (
    <DayPicker
      locale={es}
      captionLayout='dropdown-buttons'
      onMonthChange={onMonthChange}
      month={month}
      // fromYear={2015}
      // toYear={2025}
      //   mode="single"
      mode='multiple'
      selected={rangeDateState.state}
      // max={0}
      onSelect={rangeDateState.setter}
      // className="w-full"
      style={{
        marginInline: 0,
        marginBlock: 5,
        width: '100%',
        ...style,
      }}
      styles={{
        month: {
          width: '100%',
        },
        table: {
          width: '100%',
          maxWidth: 'none',
        },
        button: {
          marginInline: 'auto',
        },
        cell: {
          // display: "flex",
          // marginInline: "auto"
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center"
        },
        ...styles,
      }}
      showOutsideDays={showOutsideDays}
      modifiers={modifiers}
      modifiersStyles={modifiersStyles}
      disabled={disabled}
      weekStartsOn={weekStartsOn}
      formatters={{ formatCaption, formatWeekdayName }}
    />
  );
};

export { Calendar }
