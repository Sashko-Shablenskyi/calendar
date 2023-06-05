import { hideExtraTasks } from './hideExtraTasks.js';

export function checkHeight(choicedDay) {
  const choicedDayHeight = choicedDay.offsetHeight - 75;

  const tasksWrapper = choicedDay.querySelector('.tasks'),
    tasksWrapperHeight = tasksWrapper.offsetHeight;

  if (tasksWrapperHeight > choicedDayHeight) {
    hideExtraTasks(choicedDay);
  }
}
