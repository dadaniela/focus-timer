// const buttonPressAudio = new Audio("../assets/btn-click.wav")
// const kitchenTimer = new Audio("../assets/alarm-off.mp3")
// const bgAudio = new Audio("../assets/bg-audio.mp3")

const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnSet = document.querySelector(".set");
const btnMuted = document.querySelector(".muted");
const btnUnmuted = document.querySelector(".unmuted");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

export const elements = {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    btnMuted,
    btnUnmuted,
    minutesDisplay,
    secondsDisplay
}