import dayjs from 'dayjs'

export function formatDateWithLocale(dateTime: Date | null | undefined, format = 'MMMM DD YYYY, hh:MM a', locale = 'es') {
  if (!dateTime) {
    return '';
  }
  return dayjs(dateTime).locale(locale).format(format);
}

export function formatDate(dateTime: string | null | undefined, format = 'MMMM DD YYYY, hh:MM a') {
  if (!dateTime) {
    return '';
  }
  return dayjs(dateTime).format(format);
}

export function getFirstLastDayOfMonthFormatted(date: Date, format = 'YYYY-MM-DDTHH:mm:ss.SSSZZ') {
  const mDate = new Date(date.getTime());
  const year = mDate.getFullYear();
  const month = mDate.getMonth();

  const firstDay = new Date(year, month, 1);

  const lastDay = new Date(year, month + 1, 0);

  return {
    firstDay: formatDate(firstDay.toUTCString(), format),
    lastDay: formatDate(lastDay.toUTCString(), format),
  };
}
