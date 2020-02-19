window.addEventListener('DOMContentLoaded', () =>{
    'use strict';
    //timer
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
    }

    countTimer('1 march 2020');

    //menu
    const toggleMenu = () => {
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('nav'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () =>{
            menu.classList.toggle('active-menu');
        }

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);
        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));

    }

    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            btnPopup = document.querySelectorAll('.popup-btn'),
            closePopup = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');
        let speed = 0,
            intervalPopup,
            width = window.innerWidth;
            console.log(width);
            
        
        let flyPopup = () =>{
            intervalPopup = requestAnimationFrame(flyPopup);
            speed += 5;
            popup.style.display = 'block';
            popupContent.style.left = 0 + 'px'; 
            popupContent.style.left = speed + 'px';
            if(speed > width/2 - 175 ){
                cancelAnimationFrame(intervalPopup)
            }

        } 

        btnPopup.forEach((elem) => {
            elem.addEventListener('click', () => {
                width = window.innerWidth;
                if (width > 768){
                    requestAnimationFrame(flyPopup);
                } else {
                    console.log(width);
                    popup.style.display = 'block';
                    popupContent.style.left = 'align-center'; 
                    console.log(popupContent.style.left)
                    
                }
            })
        });

        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopup();
});