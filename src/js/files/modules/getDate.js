export function getCurrentDate() {
  const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth();

  return {
    year,
    month,
  };
}
