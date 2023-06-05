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
      <div class="month__day month__prew" data-date='${i}-${month}-${year}'>
        <div class="data">${i}</div>
        <ul class="tasks"></ul>
        <div class="extra">+ <span></span></div>
      </div>
    `;
  }

  for (let i = 0; i < lastDayOfCurrentMonth; i++) {
    if (i == day - 1 && month == currMonth && year == currYEar) {
      monthWrapper.innerHTML += `
        <div class="month__day month__curr"  data-date='${i + 1}-${
        month + 1
      }-${year}'>
          <div class="data data--curr"><span>${i + 1}</span></div>
          <ul class="tasks"></ul>
        <div class="extra">+ <span></span></div>

        </div>
      `;
    } else {
      monthWrapper.innerHTML += `
        <div class="month__day month__curr"  data-date='${i + 1}-${
        month + 1
      }-${year}'>
          <div class="data">${i + 1}</div>
          <ul class="tasks"></ul>
        <div class="extra">+ <span></span></div>

        </div>
      `;
    }
  }

  for (let i = 0; i < daysOfTheNextMonth; i++) {
    monthWrapper.innerHTML += `
      <div class="month__day month__next"  data-date='${i + 1}-${
      month + 2
    }-${year}'>
        <div class="data">${i + 1}</div>
        <ul class="tasks"></ul>
        <div class="extra">+ <span></span></div>
      </div>
    `;
  }
}
