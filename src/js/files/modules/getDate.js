import { renderCalendarHeader } from './renderCalendarHeader.js';
import { renderDayNames } from './renderDayNames.js';
import { renderDaysOfMonth } from './renderDaysOfMonth.js';
import { getFirstDayInMonth } from './getFirstDayInMonth.js';
import { getNumbDaysInMonth } from './getNumbDaysInMonth.js';

export function getDate(dayOffset = 0, monthOffset = 0, yearOffset = 0) {
  const date = new Date(),
    year = date.getFullYear() + yearOffset,
    month = date.getMonth() + monthOffset,
    day = date.getDate() + dayOffset;

  const lastDayOfCurrentMonth = getNumbDaysInMonth(year, month),
    lastDayOfPrevMonth = getNumbDaysInMonth(year, month - 1),
    firstDayOfWeek = getFirstDayInMonth(year, month),
    daysOfThePrevMonth = lastDayOfPrevMonth - firstDayOfWeek + 1,
    daysOfTheNextMonth = 7 * 6 - lastDayOfCurrentMonth - firstDayOfWeek;

  renderCalendarHeader(year, month);
  renderDayNames();
  renderDaysOfMonth(
    daysOfThePrevMonth,
    daysOfTheNextMonth,
    lastDayOfCurrentMonth,
    lastDayOfPrevMonth,
    day,
    month,
    year
  );
}
