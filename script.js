const check = document.querySelector('.checkmark');

function replay() {
  check.classList.remove('play');
  void check.offsetWidth;
  check.classList.add('play');
}

replay();
setInterval(replay, 4000);
