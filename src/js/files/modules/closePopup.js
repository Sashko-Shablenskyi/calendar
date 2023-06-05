export function closePopup() {
  const closePopup = document.querySelector('.popup__close'),
    popup = document.querySelector('.popup');

  closePopup.addEventListener('click', () => {
    popup.close();
  });
}
