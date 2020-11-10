import {setHideModalWindow, removeHideModalWindow} from './modal';

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
            statusMessage.src = message.loading; 
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);

            const formData = new FormData(form);
            const json = (Object.fromEntries(formData.entries()));

            axios({
                method: 'post',
                url: 'http://localhost:3000/requests',
                data: json
            }).then(data => {
                console.log(data);
                showThanksModal(message.sucsess);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

            /* old version 
            
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php'); 
            request.setRequestHeader('Content-type', 'aplication/json; charset-utf-8');
            request.send(json); 

            const obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    showThanksModal(message.sucsess);
                    form.reset();
                   statusMessage.remove();
                } else {
                    showThanksModal(message.failure);
                }
            });

            use services

            postData('http://localhost:3000/requests', json)
            .then(data => {
                showThanksModal(message.sucsess);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            }); 

            */

        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');
        const greetModalDialog = document.createElement('div');
        greetModalDialog.classList.add('.modal__dialog');
        const modal = document.querySelector('.modal');

        prevModalDialog.classList.add('hide');
        removeHideModalWindow('.modal');

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
            setHideModalWindow('.modal');
        }, 4000);


    }    
}

export default forms;