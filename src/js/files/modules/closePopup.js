export function closePopup() {
  const closePopup = document.querySelectorAll('.popup__close'),
    backdrop = document.querySelector('dialog'),
    addTask = document.querySelector('.add-task'),
    listOfTask = document.querySelector('.all-tasks');

  closePopup.forEach((element) => {
    element.addEventListener('click', () => {
      addTask.close();
      listOfTask.close();
    });
  });

  addTask.addEventListener('click', (e) => {
    console.log(backdrop);
  });
}
