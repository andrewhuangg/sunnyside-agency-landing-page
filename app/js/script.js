const hamburgerBtn = document.querySelector('#hamburger-btn');
const header = document.querySelector('.header');
const fadeElements = document.querySelectorAll('.has-fade');
const body = document.querySelector('body');

hamburgerBtn.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElements.forEach((ele) => {
      ele.classList.remove('fade-in');
      ele.classList.add('fade-out');
    });
  } else {
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElements.forEach((ele) => {
      ele.classList.remove('fade-out');
      ele.classList.add('fade-in');
    });
  }
});
