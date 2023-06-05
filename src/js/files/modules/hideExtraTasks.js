export function hideExtraTasks(choicedDay) {
  const tasksWrapper = choicedDay.querySelector('.tasks'),
    extraBlock = choicedDay.querySelector('.extra'),
    extraSpan = extraBlock.querySelector('span');

  const freeSpaceForTasks = choicedDay.offsetHeight - 70;
  const tasks = Array.from(tasksWrapper.children);
  const taskHeight = tasks[0].offsetHeight;

  let visibleTasksCount = Math.floor(freeSpaceForTasks / taskHeight);

  if (visibleTasksCount >= 1) {
    tasks.forEach((task, index) => {
      index >= visibleTasksCount
        ? task.classList.add('task--hidden')
        : task.classList.remove('task--hidden');
    });

    const extraTasksCount = tasks.length - visibleTasksCount;
    extraSpan.textContent = extraTasksCount;

    extraTasksCount > 0
      ? extraBlock.classList.add('extra--active')
      : extraBlock.classList.remove('extra--active');
  }

  if (visibleTasksCount < 1) {
    tasks.forEach((task) => {
      const taskSpan = task.querySelector('span');

      tasksWrapper.classList.add('tasks--line');
      task.classList.add('task--mini');
      taskSpan.classList.add('task--hidden');
    });
  }
}
