const  countTimer = (deadline) =>{
    let timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');
    
    const getTimeRemaining = () => {
        function zero(value){
            if(value < 10){
                value = '0' + value;
            }
            return value
        }

        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = zero(Math.floor(timeRemaining % 60)),
            minutes =zero(Math.floor((timeRemaining / 60) % 60)),
            hours = zero(Math.floor(timeRemaining / 60 / 60)),
            days = Math.floor(timeRemaining / 60 / 60 / 24);
        return {timeRemaining, hours, minutes, seconds};
    }

    const updateClock = () => {
        let timer = getTimeRemaining();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        if(timer.timeRemaining <= 0){
            clearInterval(timeinterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    let timeinterval = setInterval(updateClock, 1000);
    updateClock();
};

export default countTimer;