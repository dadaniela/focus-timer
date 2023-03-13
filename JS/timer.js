export function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) {
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)

    function updateDisplay(promptMinutes, seconds) {
        promptMinutes = promptMinutes === undefined ? minutes : promptMinutes
        seconds = seconds === undefined ?  0 : seconds
        minutesDisplay.textContent = String(promptMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }

    function countdown() {
        timerTimeOut = setTimeout(function() {
            let currentSeconds = Number(secondsDisplay.textContent)
            let currentMinutes = Number(minutesDisplay.textContent)

            updateDisplay(currentMinutes, 0)

            if(currentMinutes <= 0 && currentSeconds <= 0) {
                resetControls()
                updateDisplay()
                return
            }

            if(currentSeconds <= 0) {
                currentSeconds = 60
                --currentMinutes
            }

            updateDisplay(currentMinutes, String(currentSeconds -1))

            countdown();
    }, 1000)

    }

    function updateMinutes(promptMinutes) {
        minutes = promptMinutes
    }

    function hold() {
        clearTimeout(timerTimeOut)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold
    }
}