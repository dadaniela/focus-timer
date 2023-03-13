import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { elements } from "./elements.js";

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

btnPlay.addEventListener("click", function() {
    controls.play()
    timer.countdown()
})

btnPause.addEventListener("click", function() {
    controls.pause()
    timer.hold()
})

btnStop.addEventListener("click", function() {
    controls.reset()
    timer.reset()
})

btnMuted.addEventListener("click", function() {
    btnMuted.classList.add("hide")
    btnUnmuted.classList.remove("hide")
})

btnUnmuted.addEventListener("click", function() {
    btnMuted.classList.remove("hide")
    btnUnmuted.classList.add("hide")
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