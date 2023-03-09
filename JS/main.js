const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnSet = document.querySelector(".set");
const btnMuted = document.querySelector(".muted");
const btnUnmuted = document.querySelector(".unmuted");
let minutes;
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

function countdown() {
    setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        if(seconds <= 0) {
            seconds = 3
            minutesDisplay.textContent = String(minutes -1).padStart(2, "0")
        }
        
        secondsDisplay.textContent = String(seconds -1).padStart(2, "0")
        
        if(minutes <= 0){
            return
        }

        countdown()
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
    btnPlay.classList.remove("hide")
    btnPause.classList.add("hide")
    btnStop.classList.add("hide")
    btnSet.classList.remove("hide")
    secondsDisplay.textContent = "00"
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
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
})