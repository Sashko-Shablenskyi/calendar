export function getFirstDayInMonth(year, month) {
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  return firstDayOfMonth;
}
