'use strict';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

startBtn.addEventListener('click', e => {
  let btn = e.target;
  btn.disabled = true;
  const colorSwitch = setInterval(
    () =>
      (document.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)]),
    1000
  );
  stopBtn.addEventListener('click', function handleClick() {
    btn.disabled = false;
    clearInterval(colorSwitch);
    stopBtn.removeEventListener('click', handleClick);
  });
});
