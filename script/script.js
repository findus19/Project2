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
        const menu = document.querySelector('nav');
        let menuOpen = true;

        document.body.addEventListener('click', (event) => {
            let target = event.target;
            let menuBtn = target.closest('.menu');
            if (menuBtn && menuOpen) {
                menuOpen = false;
                menu.style.transform = `translate(0)`;
            } else if (target !== menu && !menuOpen) {
                menuOpen = true;
                menu.style.transform = `translate(-100%)`;
            }
        });
    }

    toggleMenu();

    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            btnPopup = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');
            const showPopup = () => {
                popup.style.display = 'block'; // показать попап
    
                if (screen.width > 768) { // если ширина экрана больше заданного числа, то запустить анимацию
                    let start = Date.now(); // получить стартовое время анимации (в момент клика)
    
                    let timer = setInterval(() => { 
                        let timePassed = Date.now() - start; // запуск таймера, отнять от текущего реального времени стартовое время, после клика
                        if (timePassed >= 800) {
                            clearInterval(timer); // если время достигло определенного числа удалить setInterval 
                            return;
                        }
    
                        draw(timePassed); // отрисовка анимации 
                    });
    
                    let draw = (timePassed) => {
                        let wContent = +getComputedStyle(popupContent).width.split('px')[0]; // получить стили попап контента (блок с самой формой, а не вся обёртка, с попап )
                        wContent = -wContent / 2 + 50 + 'px'; // данные для центрирования по горизонтали
                        popupContent.style.left = timePassed / 16 + '%'; // центрирование по горизонтали
                        popupContent.style.marginLeft = wContent; // центрирование по горизонтали
                    };
                }
    
            };
    
            btnPopup.forEach((elem) => {
                elem.addEventListener('click', showPopup);
            });
    
            popup.addEventListener('click', (event) => {
                let target = event.target;
    
                if (target.classList.contains('popup-close')) {
                    popup.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if (!target) {
                        popup.style.display = 'none';
                    }
                }
            });
    };

    togglePopup();

    //scroll
    const scroll = () =>{
    const anchors = document.querySelectorAll('a[href*="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            
            const blockID = anchor.getAttribute('href')
            
            document.querySelector(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
        }
    }
    scroll();

    //табы
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');
        
        const toggleTabContent = (index) => {
            for(let i = 0; i < tabContent.length; i++){
                if(index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');
            
            if(target){
                tab.forEach((item, i) => {
                    if(item === target){
                        toggleTabContent(i);
                    }
                });
            };
        });

        /* первый способ    while(target !== tabHeader){
                if(target.classList.contains('service-header-tab')){
                    tab.forEach((item, i) => {
                        if(item === target){
                            toggleTabContent(i);
                        }
                    });
                    return;
                };
                target = target.parentNode; 
            }
        }) */
    }

    tabs();
});