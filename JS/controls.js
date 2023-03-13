export function Controls({
    btnPlay,
    btnPause,
    btnSet,
    btnStop
}) {
    function play() {
        btnPlay.classList.add("hide")
        btnPause.classList.remove("hide")
        btnSet.classList.add("hide")
        btnStop.classList.remove("hide")
    }

    function pause() {
        btnPause.classList.add("hide")
        btnPlay.classList.remove("hide")
    }
    
    function reset() {
        btnPlay.classList.remove("hide")
        btnPause.classList.add("hide")
        btnStop.classList.add("hide")
        btnSet.classList.remove("hide")
    }

    function getMinutes() {
        let promptMinutes = prompt(`For how many minutes you'd like to focus?`) || 0
        if(!promptMinutes) {
            return false
        }
        return promptMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}