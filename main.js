document.addEventListener('mousemove', function(e) {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  document.getElementById('fondo').style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});

function irAPagina() {
  window.location.href = 'otra_pagina.html';
}

let audioEnabled = true;

function toggleAudio() {
  const audioIcon = document.getElementById('audio-icon');
  const audio = document.getElementById('mi-audio');

  audioEnabled = !audioEnabled;

  if (audioEnabled) {
    audioIcon.querySelector('[fill="#808080"]').style.display = 'none';
    audioIcon.querySelector('[fill="#00FF00"]').style.display = 'block';
    audioIcon.classList.remove('muted');
    audio.volume = 1;
  } else {
    audioIcon.querySelector('[fill="#00FF00"]').style.display = 'none';
    audioIcon.querySelector('[fill="#808080"]').style.display = 'block';
    audioIcon.classList.add('muted');
    audio.volume = 0;
  }
}

function playAudio() {
  const audio = document.getElementById('a.mp3');

  if (audio.paused) {
    audio.play();
    document.getElementById('reproducir').style.display = 'none';
  } else {
    audio.pause();
    document.getElementById('reproducir').style.display = 'block';
  }
}
