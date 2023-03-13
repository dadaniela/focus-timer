import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./elements.js";
import Sound from "./sounds.js";

const {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    btnMuted,
    btnUnmuted,
    minutesDisplay,
    secondsDisplay
} = elements

const controls = Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

const sound = Sound()

btnPlay.addEventListener("click", function() {
    controls.play()
    timer.countdown()
    sound.pressBtn()
})

btnPause.addEventListener("click", function() {
    controls.pause()
    timer.hold()
    sound.pressBtn()
})

btnStop.addEventListener("click", function() {
    controls.reset()
    timer.reset()
    sound.pressBtn()
})

btnMuted.addEventListener("click", function() {
    btnMuted.classList.add("hide")
    btnUnmuted.classList.remove("hide")
    sound.bgTrack.pause()
})

btnUnmuted.addEventListener("click", function() {
    btnMuted.classList.remove("hide")
    btnUnmuted.classList.add("hide")
    sound.bgTrack.play()
})

btnSet.addEventListener("click", function() {
    let promptMinutes = controls.getMinutes()
    if(!promptMinutes) {
        timer.reset()
        return
    }
    timer.updateDisplay(promptMinutes, 0)
    timer.updateMinutes(promptMinutes)
})