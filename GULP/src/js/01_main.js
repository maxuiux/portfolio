
// modal
let buttonClick = document.querySelector('.header-button');
let classModal = document.querySelector('.modal');
let addClassActive = 'active';

// button more block open
let buttonMore = document.querySelector('.blog-box__btn-more');
let classBlockOpen = document.querySelector('.blog-box__block')
let addClassBlockOpen = 'open';
let addClassTextClose = 'close-text';

//lazy load
const observer = lozad();

modal();

function modal() {
    function getAddClassActiveModal() {
        classModal.classList.toggle(addClassActive);
    }

    buttonClick.addEventListener('click', function () {
        getAddClassActiveModal();
    });

    classModal.addEventListener('click', function () {
        getAddClassActiveModal();
    });

    document.addEventListener('keydown', function () {
        if (String.fromCharCode(13, 27) && classModal.classList.contains(addClassActive)) {
            getAddClassActiveModal();
        }
    });

}

openText();

function openText() {
    function getAddClassOpenBlock() {
        classBlockOpen.classList.toggle(addClassBlockOpen);
        buttonMore.classList.toggle(addClassTextClose);
    }

    buttonMore.addEventListener('click', function () {
        getAddClassOpenBlock();
    });
}


observer.observe();