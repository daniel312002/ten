
const audio = document.getElementById('background-music');
const storedTime = localStorage.getItem('musicTime');
if (storedTime) {
    audio.currentTime = parseFloat(storedTime);
}

audio.addEventListener('timeupdate', () => {
    localStorage.setItem('musicTime', audio.currentTime);
});
audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
});
