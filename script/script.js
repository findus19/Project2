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

    //slider
    const slider = () => {
        const slider = document.querySelector('.portfolio-content'),
            slide = document.querySelectorAll('.portfolio-item'),
            dotUl = document.querySelectorAll('.portfolio-dots');

        let currentSlide = 0,
            interval;

        const createLi = () => {
            slide.forEach((elem, index) => {
                
                elem[index] = document.createElement('li');
                elem[index].classList.add('dot');
                dotUl[0].appendChild(elem[index]);
            })
        };

        createLi();
        const dot = document.querySelectorAll('.dot');
        dot[0].classList.add('dot-active');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

         const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        }; 

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if(!target.matches('.portfolio-btn, .dot')){
                return
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if(target.matches('#arrow-right')){
                currentSlide++;
            }else if(target.matches('#arrow-left')){
                currentSlide--;
            }else if(target.matches('.dot')){
                dot.forEach((elem, index) => {
                    if(elem === target){
                        currentSlide = index;
                    }
                })
            }
            if(currentSlide >= slide.length){
                currentSlide = 0;
            }

            if(currentSlide < 0){
                currentSlide = slide.length -1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

         slider.addEventListener('mouseover', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if(event.target.matches('.portfolio-btn') || event.target.matches('.dot')){
                startSlide();
            }
        }) ;

        startSlide(1500);
    };

    slider();

    const imgContainer = () => {
        const img = document.querySelector('#command');
        let image;
        img.addEventListener('mouseover', e => {
            let target = e.target.matches('img');
            image = e.target.src;
            if(target) {
              event.target.src = event.target.dataset.img;
            }
        });

        img.addEventListener('mouseout', e => {
            event.target.src = image;
        });

    };

    imgContainer();

    //калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');
            
        const calcul = document.querySelector('#calc');
        calcul.addEventListener('input', e => {
            const target = e.target;
            if(e.target.matches('input')) {
                target.value = target.value.replace('/[^\D]/');
            }
        });

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value;
            let squareValue = +calcSquare.value;

            if(calcCount.value > 1){
                countValue += (calcCount.value -1)  / 10;
            };

            if(calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            };

            if(typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            };
            
            totalValue.textContent = Math.ceil(total);
            
        };

        calcBlock.addEventListener('change', (event) => {
            const target = event.target
            /* if(target === calcType || target === calcSquare || 
                target === calcDay || target === calcCount){
                countSum();
            } */
            if(target.matches('select') || target.matches('input')){
                countSum();
            }
        })
    };

    calc(100);
});