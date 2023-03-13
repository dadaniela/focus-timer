export default function() {
    const btnClick = new Audio("https://github.com/dadaniela/focus-timer/blob/main/assets/btn-click.wav?raw=true")
    const alarmOff = new Audio("https://github.com/dadaniela/focus-timer/blob/main/assets/alarm-off.mp3?raw=true")
    const bgTrack = new Audio("https://github.com/dadaniela/focus-timer/blob/main/assets/bg-audio.mp3?raw=true")

    function pressBtn() {
        btnClick.play()
    }

    function timerEnded() {
        alarmOff.play()
    }

    return {
        pressBtn,
        timerEnded,
        bgTrack
    }
}