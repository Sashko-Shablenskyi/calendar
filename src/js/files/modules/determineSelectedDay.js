import { renderTask } from './renderTask.js';

export function determineSelectedDay(target) {
  const choicedDayData = target.dataset.date;

  renderTask(choicedDayData);
}
