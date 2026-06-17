let is24HourMode = true
const hoursSpan = document.getElementById("hours")
const minutesSpan = document.getElementById("minutes")
const secondsSpan = document.getElementById("seconds")
const AMPM = document.getElementById("amPm")

document.getElementById("toggle_btn").addEventListener('click', function(){
    is24HourMode = !is24HourMode
    console.log(is24HourMode)
})

function updateClock(){
    const currentTime = new Date ()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    if (is24HourMode == true){
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
        AMPM.style.display = "none"
    }
    else{
        AMPM.style.display = "flex"
        if (hours < 12) {
            AMPM.textContent = "AM";
        }
        else{
            AMPM.textContent = "PM";
        }
        hours = hours % 12
        hoursSpan.textContent = String(hours).padStart(2, '0');
        minutesSpan.textContent = String(minutes).padStart(2, '0');
        secondsSpan.textContent = String(seconds).padStart(2, '0');
    }


}

updateClock()
setInterval(updateClock,1000)
