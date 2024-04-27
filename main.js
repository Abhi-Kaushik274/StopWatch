let StartBtn = document.getElementById('start');
let StopBtn = document.getElementById('stop');
let ResetBtn = document.getElementById('reset');

const TimerElt = document.getElementById('timer');

let timerInterval; // Variable to hold the interval ID

const timer = () => {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    const millisec = now.getMilliseconds();
    TimerElt.innerHTML = `${hour} : ${min} : ${sec} : ${millisec}`;
}

StartBtn.addEventListener('click', () => {
    clearInterval(timerInterval);               // Clear any existing interval to prevent multiple intervals running simultaneously
    timer();                                    // Call timer function immediately to display the current time
    timerInterval = setInterval(timer, 1);      // Start the timer with an interval of 1 millisecond
});

StopBtn.addEventListener('click', () => {
    clearInterval(timerInterval);               // Stop the timer by clearing the interval
});

ResetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);               // Stop the timer by clearing the interval
    TimerElt.innerHTML = `00 : 00 : 00 : 00`;   // Reset the timer display to 00 : 00 : 00 : 00
});