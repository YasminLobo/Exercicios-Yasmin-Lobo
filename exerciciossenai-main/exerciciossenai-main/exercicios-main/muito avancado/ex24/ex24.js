// Yasmin Siqueira Lobo
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const progressBar = document.getElementById('progressBar');

playBtn.addEventListener('click', () => {
    audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
    audioPlayer.pause();
});

stopBtn.addEventListener('click', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});

audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = `${progress}%`;
});
