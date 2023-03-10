const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnSet = document.querySelector(".set");
const btnMuted = document.querySelector(".muted");
const btnUnmuted = document.querySelector(".unmuted");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes;

function resetControls() {
    btnPlay.classList.remove("hide")
    btnPause.classList.add("hide")
    btnStop.classList.add("hide")
    btnSet.classList.remove("hide")
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
    setTimeout(function() {
        let currentSeconds = Number(secondsDisplay.textContent)
        let currentMinutes = Number(minutesDisplay.textContent)

        updateTimerDisplay(currentMinutes, 0)

        if(currentMinutes <= 0 && currentSeconds <= 0) {
            resetControls()
            return
        }

        if(currentSeconds <= 0) {
            currentSeconds = 5
            --currentMinutes
            console.log(currentMinutes + " min")
            console.log(currentSeconds + " sec")
            // minutesDisplay.textContent = String(currentMinutes - 1).padStart(2, "0")
            updateTimerDisplay(String(currentMinutes -1), currentSeconds)
        }

        // secondsDisplay.textContent = String(currentSeconds - 1).padStart(2, "0")
        updateTimerDisplay(currentMinutes, String(currentSeconds -1))

        countdown();
    }, 1000)
}

btnPlay.addEventListener("click", function() {
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
    btnSet.classList.add("hide")
    btnStop.classList.remove("hide")
    countdown()
})

btnPause.addEventListener("click", function() {
    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
})

btnStop.addEventListener("click", function() {
    resetControls()
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
    minutes = prompt(`For how many minutes you'd like to focus?`)
    console.log(minutes + " do prompt")
    updateTimerDisplay(minutes, 0)
})