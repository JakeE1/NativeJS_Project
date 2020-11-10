import tabs  from './modules/tabs';
import timer  from './modules/timer';
import items  from './modules/items';
import modal  from './modules/modal';
import forms  from './modules/forms';
import slider  from './modules/slider';
import calc  from './modules/calc';

window.addEventListener('DOMContentLoaded', function () {
    
    tabs('.tabcontent', '.tabheader__items', '.tabheader__item', "tabheader__item_active");
    timer('.timer', '2020-12-15');
    items();
    modal('[data-modal-btn]', '.modal');
    forms('form');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    calc();

}, false);