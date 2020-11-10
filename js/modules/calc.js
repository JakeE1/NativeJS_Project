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

export default calc;