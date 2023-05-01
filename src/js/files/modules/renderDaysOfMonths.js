import { getFirstDayInMonth } from './getFirstDayInMonth.js';
import { getNumbDaysInMonth } from './getNumbDaysInMonth.js';

const monthWrapper = document.querySelector('.month__days');

const lastDayOfCurrentMonth = getNumbDaysInMonth(year, month);
const lastDayOfPrevMonth = getNumbDaysInMonth(year, month - 1);
const firstDayOfWeek = getFirstDayInMonth(year, month);

const daysOfThePrevMonth = lastDayOfPrevMonth - firstDayOfWeek + 1;
const daysOfTheNextMonth = 7 * 6 - lastDayOfCurrentMonth - firstDayOfWeek;

export function renderDaysOfMonths(year, month, day) {
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
