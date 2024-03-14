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

/**
 * utility function than performs a shallow equality comparison between two values
 * @param a
 * @param b
 * @returns
 */
export function shallowEqual(a: any, b: any) {
  if (a === b) {
    return true;
  }

  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }

  const keys = Object.keys(a);
  const { length } = keys;

  if (length !== Object.keys(b).length) {
    return false;
  }

  for (let i = 0; i < length; i += 1) {
    const key = keys[i];

    if (!(key in b)) {
      return false;
    }

    if (a[key] !== b[key]) {
      return false;
    }
  }

  return true;
}


export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));