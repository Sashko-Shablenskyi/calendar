const monthWrapper = document.querySelector('.month__days');

export function renderDaysOfMonth(
  daysOfThePrevMonth,
  daysOfTheNextMonth,
  lastDayOfCurrentMonth,
  lastDayOfPrevMonth,
  day,
  month,
  year
) {
  const currMonth = new Date().getMonth(),
    currYEar = new Date().getFullYear();

  monthWrapper.innerHTML = '';

  for (let i = daysOfThePrevMonth; i <= lastDayOfPrevMonth; i++) {
    monthWrapper.innerHTML += `
      <li class="month__day month__prew" data-date='${i}-${month}-${year}'>
        <div class="data">${i}</div>
        <div class="tasks"></div>
      </li>
    `;
  }

  for (let i = 0; i < lastDayOfCurrentMonth; i++) {
    if (i == day - 1 && month == currMonth && year == currYEar) {
      monthWrapper.innerHTML += `
        <li class="month__day month__curr"  data-date='${i + 1}-${
        month + 1
      }-${year}'>
          <div class="data data--curr"><span>${i + 1}</span></div>
          <div class="tasks"></div>
        </li>
      `;
    } else {
      monthWrapper.innerHTML += `
        <li class="month__day month__curr"  data-date='${i + 1}-${
        month + 1
      }-${year}'>
          <div class="data">${i + 1}</div>
          <div class="tasks"></div>
        </li>
      `;
    }
  }

  for (let i = 0; i < daysOfTheNextMonth; i++) {
    monthWrapper.innerHTML += `
      <li class="month__day month__next"  data-date='${i + 1}-${
      month + 2
    }-${year}'>
        <div class="data">${i + 1}</div>
        <div class="tasks"></div>
      </li>
    `;
  }
}
