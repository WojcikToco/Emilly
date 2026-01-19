const envelope = document.getElementById("envelope");
const landing = document.getElementById("landing");

const playPause = document.getElementById("playPause");
const audio = document.getElementById("audio");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    landing.style.display = "flex";
});

playPause.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPause.textContent = "⏸️";
    } else {
        audio.pause();
        playPause.textContent = "▶️";
    }
});
