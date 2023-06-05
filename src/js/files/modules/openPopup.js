import { determineSelectedDay } from './determineSelectedDay.js';

export function openPopup() {
  const daysContainer = document.querySelector('.month__days'),
    popup = document.querySelector('.popup'),
    taskBtn = popup.querySelector('.popup__btn');

  let target;
  daysContainer.addEventListener('click', (e) => {
    target = e.target;

    if (!target.dataset.date) return;

    popup.showModal();
  });

  taskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    determineSelectedDay(target);
  });
}
