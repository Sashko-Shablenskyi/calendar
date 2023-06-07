export function renderListOfTheTasks(tasksWrapper) {
  const tasksList = document.querySelector('.all-tasks__list');
  const tasksArr = Array.from(tasksWrapper.children);

  let template = '';

  tasksArr.forEach((e) => {
    e.classList.remove('task--hidden');
    template += e.outerHTML;
  });
  console.dir(template);

  tasksList.innerHTML = `${template}`;
}
