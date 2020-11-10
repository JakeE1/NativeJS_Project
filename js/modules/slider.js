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

export default slider;