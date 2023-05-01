const containerOfDayNames = document.querySelector('.calendar__days');

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function renderDayNames() {
  let template = ``;

  for (let i = 0; i < dayNames.length; i++) {
    template += `<li>${dayNames[i]}</li>`;
  }

  containerOfDayNames.innerHTML = template;
}
