const headerContainer = document.querySelector('.current');

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function renderCalendarHeader(year, month) {
  const yearsToSubtract = Math.ceil(-month / 12);
  year -= yearsToSubtract;
  month += yearsToSubtract * 12;

  if (month < 0) {
    month += 12;
    --year;
  }

  if (month > 11) {
    month = 0;
    ++year;
  }

  headerContainer.innerHTML = `
    <div class="current__arrow--left"></div>
    <div>
      <div class="current__month">${monthNames[month]}</div>
      <div class="current__year">${year}</div>
    </div>
    <div class="current__arrow--right"></div>
  `;
}
