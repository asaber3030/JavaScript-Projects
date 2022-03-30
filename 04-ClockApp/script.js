setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (currentDate.getMinutes() + secondsRatio) / 60;
  const hoursRatio = (currentDate.getHours() + minutesRatio) / 12;

  setRotations(secondHand, secondsRatio);
  setRotations(minuteHand, minutesRatio);
  setRotations(hourHand, hoursRatio);
}

setClock();

function setRotations(el, rotation) {
  el.style.transform = `rotate(${rotation * 360}deg)`;
}