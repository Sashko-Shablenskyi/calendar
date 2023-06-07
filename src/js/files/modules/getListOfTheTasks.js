import { renderListOfTheTasks } from './renderListOfTheTasks.js';

export function getListOfTheTasks(target) {
  const tasksWrapper = target.closest('.tasks');

  renderListOfTheTasks(tasksWrapper);
}
