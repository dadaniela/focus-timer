const btnPlay = document.querySelector(".play");
const btnPause = document.querySelector(".pause");
const btnStop = document.querySelector(".stop");
const btnSet = document.querySelector(".set");

btnPlay.addEventListener("click", function() {
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
    btnSet.classList.add("hide")
    btnStop.classList.remove("hide")
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
})