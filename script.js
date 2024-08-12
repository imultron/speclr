document.getElementById('menuIcon').addEventListener('click', function() {
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioElement');
    const playButton = document.getElementById('play');
    const stopButton = document.getElementById('stop');

    playButton.addEventListener('click', function() {
        audio.loop = true; // Set the audio to loop
        audio.play(); // Start playing the audio
    });

    stopButton.addEventListener('click', function() {
        audio.pause(); // Pause the audio
        audio.currentTime = 0; // Reset the audio to the beginning
    });
});
