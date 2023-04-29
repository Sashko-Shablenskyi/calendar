const containerOfDayNames = document.querySelector('.calendar__days');

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function renderDayNames() {
  for (let i = 0; i < dayNames.length; i++) {
    const template = `
      <li>${dayNames[i]}</li>
    `;

    containerOfDayNames.innerHTML += template;
  }
}
