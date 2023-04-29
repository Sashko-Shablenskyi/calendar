export function getCurrentDate(dayOffset = 0, monthOffset = 0, yearOffset = 0) {
  const date = new Date(),
    year = date.getFullYear() + yearOffset,
    month = date.getMonth() + monthOffset,
    day = date.getDate() + dayOffset;

  return {
    year,
    month,
    day,
  };
}
