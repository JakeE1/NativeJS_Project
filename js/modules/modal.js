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
    const modalWindow = document.querySelector(modalSelector);

    btnModal.forEach((e) => {
        e.addEventListener('click', () => {
            removeHideModalWindow(modalSelector);
            clearInterval(modalWindowDelay);
        });
    });

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
export default modal;
export {setHideModalWindow};
export {removeHideModalWindow};