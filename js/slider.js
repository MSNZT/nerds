const button1 = document.querySelector('.control-1');
const button2 = document.querySelector('.control-2');
const button3 = document.querySelector('.control-3');
const slides = document.querySelector('.slides-list');

button1.addEventListener('click', function () {
  slides.classList.add('slide-wrapper-1');
  button1.classList.add('control-current');
  button2.classList.remove('control-current');
  button3.classList.remove('control-current');
  slides.classList.remove('slide-wrapper-2');
  slides.classList.remove('slide-wrapper-3');
});

button2.addEventListener('click', function () {
  slides.classList.add('slide-wrapper-2');
  button2.classList.add('control-current');
  button1.classList.remove('control-current');
  button3.classList.remove('control-current');
  slides.classList.remove('slide-wrapper-1');
  slides.classList.remove('slide-wrapper-3');
});

button3.addEventListener('click', function () {
  slides.classList.add('slide-wrapper-3');
  button3.classList.add('control-current');
  button2.classList.remove('control-current');
  button1.classList.remove('control-current');
  slides.classList.remove('slide-wrapper-2');
  slides.classList.remove('slide-wrapper-1');
});