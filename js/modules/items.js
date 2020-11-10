import {getItems} from '../services/services'

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



    getItems('http://localhost:3000/menu')
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

export default items;