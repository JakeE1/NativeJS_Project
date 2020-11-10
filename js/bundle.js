/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/items */ "./js/modules/items.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ "./js/modules/forms.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
;







window.addEventListener('DOMContentLoaded', function () {
   
   
    /* tabs */
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.default)('.tabcontent', '.tabheader__items', '.tabheader__item', "tabheader__item_active");
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_1__.default)('.timer', '2020-12-15');
    (0,_modules_items__WEBPACK_IMPORTED_MODULE_2__.default)();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.default)('[data-modal-btn]', '.modal');
    (0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__.default)('form');
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__.default)({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)();
    /* Timer */ 
    /*    MenuItems   */
    /* modal window */
    /* post message forms */
    /* slider */
    /* calc */ 
    /* fetch('http://localhost:3001/menu')
    .then(data => data.json())
    .then(res => console.log(res)); */

}, false);

/***/ }),

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function calc(){
    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')){
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')){
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    }
    
    const calcTotal = function calculatingTotalAmount(){
        if (!sex || !height || !weight || !age || !ratio){
            return result.textContent = "_____";
        }

        if (sex == 'female'){
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }

    calcTotal();

    const setStat = function setStaticInformationFromLocalStorage(Selector, activeClass) {
        const elements = document.querySelectorAll(Selector);

        elements.forEach(element => {
            element.classList.remove(activeClass);

            if (element.getAttribute('id') === localStorage.getItem('sex')){
                element.classList.add(activeClass);
            }
            if (element.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                element.classList.add(activeClass);
            }
        });
    }

    setStat('#gender div', 'calculating__choose-item_active');
    setStat('.calculating__choose_big div', 'calculating__choose-item_active');

    const getStat = function getStaticInformationFromCalculater(Selector, activeClass) {
        const elements = document.querySelectorAll(Selector);

        elements.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-ratio')) {
                    ratio = +e.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'));
                }
                
                console.log(sex, ratio);
    
                elements.forEach((e) => {
                    e.classList.remove(activeClass);
                })
    
                e.target.classList.add(activeClass);
    
                calcTotal();
            });
        })

    }; 
    
    getStat('#gender div', 'calculating__choose-item_active');
    getStat('.calculating__choose_big div', 'calculating__choose-item_active');


    const getDinamic = function getDinamicInformationFromCalculaterInputs(selector){
        const input = document.querySelector(selector);

        input.addEventListener('input', (e) => {

            if (input.value.match(/\D/g)){
                input.style.border = '2px solid red';
            } else {
                input.style.border = 'none';
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +e.target.value;
                    break;

                case 'weight':
                    weight = +e.target.value;
                    break;

                case 'age':
                    age = +e.target.value;
                    break;
                
            
                default:
                    break;
            }
            calcTotal(); 
        });

      
    };

    getDinamic('#height');
    getDinamic('#weight');
    getDinamic('#age');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);

/***/ }),

/***/ "./js/modules/forms.js":
/*!*****************************!*\
  !*** ./js/modules/forms.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
;

function forms(form){
    const messageForms = document.querySelectorAll(form);

    const message = {
        loading: 'img/form/spinner.svg',
        sucsess: 'sucsses',
        failure: 'whops smth go wrong'
    };

    messageForms.forEach(item => {
        bindformRequest(item);
    });



    function bindformRequest(form) {

        form.addEventListener('submit', (event) => {

            event.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading; // equal .setAttribute
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            /* old version 
            
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php'); 
            request.setRequestHeader('Content-type', 'aplication/json; charset-utf-8');
            request.send(json); 
            */
            const formData = new FormData(form);

            /* old
            
            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            }); */

            const json = (Object.fromEntries(formData.entries()));

            /*  fetch('server.php', {
                 method: 'POST',
                 headers: {
                     'Content-type':'aplication/json'
                 },
                 body: json                      // JSON.stringify(obj) 
             }) */

            axios({
                method: 'post',
                url: 'http://localhost:3000/requests',
                data: json
            }).then(data => {
                // (data => { return - need data.text();})  = undefined
                console.log(data);
                showThanksModal(message.sucsess);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

            /* postData('http://localhost:3000/requests', json)
            .then(data => {
                // (data => { return - need data.text();})  = undefined
                console.log(data);
                showThanksModal(message.sucsess);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });   */


            /* request.addEventListener('load', () => {
                if (request.status === 200) {
                    showThanksModal(message.sucsess);
                    form.reset();
                   statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                }
            });  */

        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        const greetModalDialog = document.createElement('div');
        greetModalDialog.classList.add('.modal__dialog');
        const modal = document.querySelector('.modal');

        prevModalDialog.classList.add('hide');
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.removeHideModalWindow)('.modal');

        greetModalDialog.innerHTML = `
            <div class = "modal__content">
                <div class = "modal__close" data-close>
                    x
                </div>
                <div class = "modal__title">
                    ${message}
                </div>
            </div>
        `;

        modal.append(greetModalDialog);
        setTimeout(() => {
            greetModalDialog.remove();
            prevModalDialog.classList.remove('hide');
            (0,_modal__WEBPACK_IMPORTED_MODULE_0__.setHideModalWindow)('.modal');
        }, 4000);


    }    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./js/modules/items.js":
/*!*****************************!*\
  !*** ./js/modules/items.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
;

function items(){
    class MenuItems {
        constructor(item, src, alt, subtitle, description, price, ...classes) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.description = description;
            this.item = document.querySelector(item);
            this.transfer = 27;
            this.classes = classes;
            console.log(this.item);
            this.price = price;
        }

        changetoUsd() {
            this.price = this.price * this.transfer;
        }

        createItemElement() {
            var element = document.createElement('div');
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else {
                this.classes.forEach(className => {
                    element.classList.add(className);
                });
            }

            element.innerHTML = `<img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.subtitle}</h3>
            <div class="menu__item-descr">${this.description}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>`;

            this.item.firstElementChild.append(element);
        }

    }



    (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getItems)('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuItems('.menu__field', img, altimg, title, descr, price).createItemElement();
            });
        });


    /*
    with using axios

    axios.get('http://localhost:3001/menu')
        .then(data => {
            data.data.forEach(({img, altimg, title, descr, price}) => {
                new MenuItems('.menu__field', img, altimg, title, descr, price).createItemElement();
        });
    });
    
    */

    /*
    alt variant for class 
    getItems('http://localhost:3001/menu')
    .then(data => createCard(data)); 
    function createCard(data){
        console.log(data);
            data.forEach(({img, altimg, title, descr, price}) => {
                const element = document.createElement('div');

                element.classList.add('menu__item');

                element.innerHTML = `<img src="${img}" alt="${altimg}">
                <h3 class="menu__item-subtitle">${title}</h3>
                <div class="menu__item-descr">${descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${price}</span> грн/день</div>
                   </div>`;

                   document.querySelector('.menu .container').append(element);
            });
        } */

    /* new MenuItems(
        '.menu__field',
        'img/tabs/vegy.jpg',
        'vegy',
        'Меню "Фитнес" ',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        '229',
        'menu__item', 'big'
        
        ).createItemElement();

    new MenuItems(
        '.menu__field',
        'img/tabs/elite.jpg',
        'elite',
        'Меню “Премиум” ',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '550',
        'menu__item'
        
        ).createItemElement();

    new MenuItems(
        '.menu__field',
        'img/tabs/post.jpg',
        'vegy',
        'Меню "Постное" ',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '430'
        
        
        ).createItemElement(); */
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (items);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeHideModalWindow [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setHideModalWindow [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "setHideModalWindow": () => /* binding */ setHideModalWindow,
/* harmony export */   "removeHideModalWindow": () => /* binding */ removeHideModalWindow
/* harmony export */ });
function setHideModalWindow(modalSelector){
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.add('hide');
    document.body.style.overflow = "";
}

function removeHideModalWindow(modalSelector){
    const modalWindow = document.querySelector(modalSelector);

    modalWindow.classList.remove('hide');
    document.body.style.overflow = "hidden";
}

function modal(triggerSelector, modalSelector){
    const btnModal = document.querySelectorAll(triggerSelector);
    /*  const btnModalClose = document.querySelector('[data-close]'); */
    const modalWindow = document.querySelector(modalSelector);

    

    btnModal.forEach((e) => {
        e.addEventListener('click', () => {
            removeHideModalWindow(modalSelector);
            clearInterval(modalWindowDelay);
        });
    });

    /* btnModalClose.addEventListener('click', setHideModalWindow);
    e.target.getAttribute('data-close') == ""
    */

    modalWindow.addEventListener('click', (e) => {
        if (e.target == modalWindow || e.target.getAttribute('data-close') == "") {
            setHideModalWindow(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {

        if (e.code === 'Escape' && !(modalWindow.classList.contains('hide'))) {
            setHideModalWindow(modalSelector);
        }
    });

    const modalWindowDelay = setTimeout(() => removeHideModalWindow(modalSelector), 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            removeHideModalWindow(modalSelector);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }



    window.addEventListener('scroll', showModalByScroll);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}){
    const slides = document.querySelectorAll(slide),
    prevSlideBtn = document.querySelector(prevArrow),
    nextSlideBtn = document.querySelector(nextArrow),
    currentSlideIndex = document.querySelector(currentCounter),
    totalSlidesAmount = document.querySelector(totalCounter),
    wrapperSlideBlock = document.querySelector(wrapper),
    innerSlideBlock = document.querySelector(field),
    fullSlider = document.querySelector(container),
    slideWidth = window.getComputedStyle(wrapperSlideBlock).width;

let slideIndex = 1;
let offset = 0;

if (slides.length < 10) {
    totalSlidesAmount.textContent = `0${slides.length}`;
    currentSlideIndex.textContent = `0${slideIndex}`;
} else {
    currentSlideIndex.textContent = `${slideIndex}`;
    totalSlidesAmount.textContent = `${slides.length}`;
}

const addZero = function addZeroDepenceOnNumberRank(){
    if (slideIndex < 10) {
        currentSlideIndex.textContent = `0${slideIndex}`;
    } else {
        currentSlideIndex.textContent = `${slideIndex}`;
    }
}
const refreshDots = function refreshArrayOfDots(){
    dots.forEach(dot => {
        dot.style.opacity = 0.5;
        dots[slideIndex - 1].style.opacity = 1;
    });
}

innerSlideBlock.style.display = 'flex';
innerSlideBlock.style.transition = '.4s all';
innerSlideBlock.style.width = `${100 * slides.length}%`;
wrapperSlideBlock.style.overflow = 'hidden';

slides.forEach(slide => {
    slide.style.width = slideWidth;
})

fullSlider.style.position = 'relative';
const dotList = document.createElement('ol'),
dots = [];
dotList.classList.add('carousel-indicators');

for (let i = 0; i < slides.length; i++) {
    const itemDotList = document.createElement('li');
    itemDotList.setAttribute('data-slide-to', i + 1);
    itemDotList.classList.add('dot');
    if (i == 0) {
        itemDotList.style.opacity = 1;
    }
    dotList.append(itemDotList);
    dots.push(itemDotList);
}

fullSlider.append(dotList);

let deleteNotDigits = (str) => +str.replace(/\D/g, '');

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');
        slideIndex = slideTo;

        offset = deleteNotDigits(slideWidth) * (slideTo - 1);
        innerSlideBlock.style.transform = `translateX(-${offset}px)`;

        addZero();

        refreshDots();

    })
})

nextSlideBtn.addEventListener('click', () => {

    if (offset == deleteNotDigits(slideWidth) * (slides.length - 1)) {
        offset = 0;
    } else {
        offset += deleteNotDigits(slideWidth);
    }
    innerSlideBlock.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    addZero();

    refreshDots();
});

prevSlideBtn.addEventListener('click', () => {
    if (offset == 0) {
        offset = deleteNotDigits(slideWidth) * (slides.length - 1);
    } else {
        offset -= deleteNotDigits(slideWidth);
    }
    innerSlideBlock.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    addZero()

    refreshDots();
});
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    const tabContents = document.querySelectorAll(tabsSelector);
    const tabParent = document.querySelector(tabsContentSelector);
    const tabs = document.querySelectorAll(tabsParentSelector);

    function hideTabs() {
        tabContents.forEach((e) => {
            e.classList.add('hide');

            tabs.forEach((e) => {
                e.classList.remove(activeClass);
            });

        });
    }


    function showTab(tabItem = 0) {

        tabContents[tabItem].classList.remove("hide");

        tabs[tabItem].classList.add(activeClass);

        /* tabItem.classList.add('tabheader__item_active'); */
    }

    hideTabs();
    showTab();

    tabParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsParentSelector.slice(1))) {
            tabs.forEach((e, i) => {
                if (e == target) {
                    hideTabs();
                    showTab(i);
                }
            });
        }

    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function timer(id, deadLine) {

    function getTimeRemaining(endtime) {

        const conclusionDate = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor(conclusionDate / (1000 * 60 * 60 * 24)),
            hours = Math.floor((conclusionDate / (1000 * 60 * 60)) % 24),
            minutes = Math.floor((conclusionDate / (1000 * 60)) % 60),
            seconds = Math.floor((conclusionDate / (1000)) % 60);

        return {
            'conclusionDate': conclusionDate,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    function setCLock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

        updateClock();


        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }


    }
    setCLock(id, deadLine);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/*! namespace exports */
/*! export getItems [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItems": () => /* binding */ getItems
/* harmony export */ });
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'aplication/json'
        },
        body: data
    });

    return await res.json();
};

const getItems = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=bundle.js.map