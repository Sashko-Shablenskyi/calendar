import { checkHeight } from './checkHeight.js';

export function renderTask(choicedDayData) {
  const popup = document.querySelector('.popup'),
    addTaskInput = popup.querySelector('.popup__textarea'),
    taskColor = popup.querySelector('.popup__select');

  const task = addTaskInput.value,
    choicedTaskColor = taskColor.value;

  const choicedDay = document.querySelector(`[data-date='${choicedDayData}']`),
    tasksWrapper = choicedDay.querySelector('.tasks');

  if (task) {
    tasksWrapper.insertAdjacentHTML(
      'afterbegin',
      `
     <li class="task ${choicedTaskColor}"><span>${task}</span></li>`
    );
  }

  addTaskInput.value = '';

  popup.close();
  checkHeight(choicedDay);
}
