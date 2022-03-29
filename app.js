/* Get Drum Audio */
const boomAudio = document.getElementById("boomAudio");
const clapAudio = document.getElementById("clapAudio");
const hihatAudio = document.getElementById("hihatAudio");
const kickAudio = document.getElementById("kickAudio");
const openHatAudio = document.getElementById("openHatAudio");
const rideAudio = document.getElementById("rideAudio");
const snareAudio = document.getElementById("snareAudio");
const tinkAudio = document.getElementById("tinkAudio");
const tomAudio = document.getElementById("tomAudio");

document.addEventListener("keydown", (event) => {
    playBoom();
});

const playBoom = () => {
    boomAudio.play();
}