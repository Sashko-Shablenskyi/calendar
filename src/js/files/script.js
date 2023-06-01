import { changeMonth } from './modules/changeMonth.js';
import { getDate } from './modules/getDate.js';

getDate();
changeMonth();

//========================================================================================================================================================

const daysContainer = document.querySelector('.month__days'),
  closePopup = document.querySelector('.popup__close'),
  popup = document.querySelector('.popup');

let choisedDay;

daysContainer.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName != 'LI') return;
  popup.showModal();
  choisedDay = e.target.dataset.date;
  console.log(choisedDay);
});

closePopup.addEventListener('click', () => {
  popup.close();
});

//========================================================================================================================================================

const taskBtn = document.querySelector('.popup__btn'),
  addTaskInput = document.querySelector('.popup__textarea'),
  taskColor = document.querySelector('.popup__select');

taskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.close();

  const task = addTaskInput.value,
    choicedTaskColor = taskColor.value;

  console.log(task);
  console.log(choicedTaskColor);

  const choicedDay = document.querySelector(`[data-date='${choisedDay}'`),
    tasksWrapper = choicedDay.querySelector('.tasks');

  tasksWrapper.innerHTML += `
      <span class="task ${choicedTaskColor}">${task}</span>`;

  addTaskInput.value = '';
});

// <div class="tasks"></div>;

//========================================================================================================================================================
