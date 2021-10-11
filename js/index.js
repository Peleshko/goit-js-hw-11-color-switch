import refs from './refs.js';
import colors from './colors.js';

const { bodyEL, colorDisplayEL, btnStartEL, btnStopEL } = refs;
let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBgColor() {
  bodyEL.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length - 1)];

  showBgColorFn();
}

function startActionFn() {
  intervalId = setInterval(changeBgColor, 1000);
  buttonDisabledToggleFn(btnStartEL);
  buttonDisabledToggleFn(btnStopEL);
}

function stopActionFn() {
  clearInterval(intervalId);
  buttonDisabledToggleFn(btnStartEL);
  buttonDisabledToggleFn(btnStopEL);
}

function buttonDisabledToggleFn(button) {
  button.classList.contains('disabled')
    ? button.removeAttribute('disabled')
    : button.setAttribute('disabled', 'disabled');
  button.classList.toggle('disabled');
}

function showBgColorFn() {
  colorDisplayEL.textContent = `Body color is : ${bodyEL.style.backgroundColor}`;
  console.log(`BG-Color is : ${bodyEL.style.backgroundColor}`);
}

btnStopEL.classList.add('disabled');
btnStartEL.addEventListener('click', startActionFn);
btnStopEL.addEventListener('click', stopActionFn);