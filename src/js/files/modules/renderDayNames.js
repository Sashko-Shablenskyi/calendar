export function renderDayNames() {
  const containerOfDayNames = document.querySelector('.calendar__days');

  const dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMobile = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const viewportWidth = window.innerWidth;

  let template = ``;

  if (viewportWidth > 991.98) {
    for (let i = 0; i < dayNames.length; i++) {
      template += `<li>${dayNames[i]}</li>`;
    }
  }

  if (viewportWidth > 479.98 && viewportWidth <= 991.98) {
    for (let i = 0; i < dayNamesShort.length; i++) {
      template += `<li>${dayNamesShort[i]}</li>`;
    }
  }

  if (viewportWidth < 479.98) {
    for (let i = 0; i < dayNamesMobile.length; i++) {
      template += `<li>${dayNamesMobile[i]}</li>`;
    }
  }

  containerOfDayNames.innerHTML = template;
}
