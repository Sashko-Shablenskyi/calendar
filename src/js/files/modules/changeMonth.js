import { getDate } from './getDate.js';

const arrowContainer = document.querySelector('.current');
let monthOffset = 0,
  yearOffset = 0;

export function changeMonth() {
  arrowContainer.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('current__arrow--left')) {
      getDate(0, --monthOffset, yearOffset);
    } else if (target.classList.contains('current__arrow--right')) {
      getDate(0, ++monthOffset, yearOffset);
    }
  });
}
