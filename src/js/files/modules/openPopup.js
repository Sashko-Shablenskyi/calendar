import { determineSelectedDay } from './determineSelectedDay.js';
import { getListOfTheTasks } from './getListOfTheTasks.js';

export function openPopup() {
  const daysContainer = document.querySelector('.month__days'),
    addTaskPopup = document.querySelector('.add-task'),
    taskListPopup = document.querySelector('.all-tasks'),
    taskBtn = addTaskPopup.querySelector('.add-task__btn');

  let target;
  daysContainer.addEventListener('click', (e) => {
    target = e.target;

    if (target.closest('li') || target.closest('span')) {
      taskListPopup.showModal();
      getListOfTheTasks(target);
    } else {
      addTaskPopup.showModal();
    }
  });

  taskBtn.addEventListener('click', (e) => {
    e.preventDefault();

    determineSelectedDay(target);
  });
}
