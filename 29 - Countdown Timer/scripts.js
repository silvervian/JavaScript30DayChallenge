let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time');

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondstLeft = Math.round((then - Date.now()) / 1000) ;
        if(secondstLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondstLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainerSeconds = seconds % 60;
    const display = `${minutes}:${remainerSeconds < 10 ? '0' : ''}${remainerSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timeStamp) {
    const end = new Date(timeStamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be back At ${hour}:${minutes}`; 
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});