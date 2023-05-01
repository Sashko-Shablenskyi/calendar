const monthWrapper = document.querySelector('.month__days');

export function renderDaysOfMonth(
  daysOfThePrevMonth,
  daysOfTheNextMonth,
  lastDayOfCurrentMonth,
  lastDayOfPrevMonth,
  day
) {
  monthWrapper.innerHTML = '';

  for (let i = daysOfThePrevMonth; i <= lastDayOfPrevMonth; i++) {
    monthWrapper.innerHTML += `
      <li class="month__day month__prew">
        <div class="data">${i}</div>
        <div class="tasks"></div>
      </li>
    `;
  }

  for (let i = 0; i < lastDayOfCurrentMonth; i++) {
    if (i == day - 1) {
      monthWrapper.innerHTML += `
        <li class="month__day month__day--curr">
          <div class="data data--curr"><span>${i + 1}</span></div>
          <div class="tasks"></div>
        </li>
      `;
    } else {
      monthWrapper.innerHTML += `
        <li class="month__day month__curr">
          <div class="data">${i + 1}</div>
          <div class="tasks"></div>
        </li>
      `;
    }
  }

  for (let i = 0; i < daysOfTheNextMonth; i++) {
    monthWrapper.innerHTML += `
      <li class="month__day month__next">
        <div class="data">${i + 1}</div>
        <div class="tasks"></div>
      </li>
    `;
  }
}
