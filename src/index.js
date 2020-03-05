'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elemntClosest from 'element-closest';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';
elemntClosest(window);



import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import imgContainer from './modules/imgContainer';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import reg from './modules/reg';

//timer
countTimer('12 march 2020');
//menu
toggleMenu();
//popup
togglePopup();
//scroll
scroll();
//табы
tabs();
//slider
slider();
//команда
imgContainer();
//калькулятор
calc(100);
//send-ajax-form
sendForm();
//регулярки
reg();