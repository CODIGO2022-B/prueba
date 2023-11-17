document.addEventListener('mousemove', function (e) {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    document.getElementById('fondo').style.transform = `translate(${xAxis}px, ${yAxis}px)`;
});

function irAPagina() {
    window.location.href = 'otra_pagina.html';
}

// Añade esta función para mantener el botón visible
window.addEventListener('scroll', function() {
    document.getElementById('inicio').style.bottom = '20px'; // Ajusta según sea necesario
});
// ... Tu código existente ...

let audioEnabled = true; // Variable para rastrear si el audio está habilitado

function toggleAudio() {
    const audioIcon = document.getElementById('audio-icon');
    const audio = document.getElementById('mi-audio'); // Reemplaza 'mi-audio' con el ID de tu elemento de audio

    audioEnabled = !audioEnabled; // Invierte el estado del audio

    if (audioEnabled) {
        audioIcon.querySelector('[fill="#808080"]').style.display = 'none';
        audioIcon.querySelector('[fill="#00FF00"]').style.display = 'block';
        audioIcon.classList.remove('muted');
        audio.volume = 1; // Restaura el volumen al máximo
    } else {
        audioIcon.querySelector('[fill="#00FF00"]').style.display = 'none';
        audioIcon.querySelector('[fill="#808080"]').style.display = 'block';
        audioIcon.classList.add('muted');
        audio.volume = 0; // Establece el volumen en 0 (muted)
    }
} 
