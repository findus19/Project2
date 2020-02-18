window.addEventListener('DOMContentLoaded', () =>{
    'use strict';
    //timer
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        function getTimeRemaining() {

            function zero(value){
                if(value < 10){
                    value = '0' + value;
                }
                return value
            }


            let dateStop = new Date(2020, 1, 18, 19, 34, 0),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = zero(Math.floor(timeRemaining % 60)),
                minutes =zero(Math.floor((timeRemaining / 60) % 60)),
                hours = zero(Math.floor(timeRemaining / 60 / 60)),
                days = Math.floor(timeRemaining / 60 / 60 / 24);
                console.log(dateStop);
            return {timeRemaining, hours, minutes, seconds};
        }

        function updateClock(){
            let timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            let timeinterval = setInterval(updateClock, 1000);
            if(timer.timeRemaining > 0){
                timeinterval;
            } else {
                clearInterval(timeinterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        updateClock();
    }

    countTimer();
    //setInterval(countTimer, 1000, '01 march 2020')
});