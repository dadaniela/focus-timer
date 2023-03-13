import {
    btnPlay,
    btnPause,
    btnStop,
    btnSet,
    btnMuted,
    btnUnmuted
} from "./elements.js"

export default function Events({
    controls,
    timer,
    sound,
}) {
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

    return {
        controls,
        timer,
        sound
    }
}