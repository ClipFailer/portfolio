const OPEN_MODAL_BTN = document.getElementById('open-mf-btn');
const CLOSE_MODAL_BTN = document.getElementById('close-mf-btn');
const MODAL = document.getElementById('mf');
const SUBMIT = document.getElementById('modal-submit');

const SUCCESS_MODAL = document.getElementById('success_modal')
const CLOSE_SUCCESS_MODAL_BTN = document.getElementById('close-success-modal-btn')
const BACK_SUCCESS_MODAL_BTN = document.getElementById('back-success-modal-btn')

// Открытие окна формы
OPEN_MODAL_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    MODAL.style.display = 'flex';
})

// Закрытие модульного окна
CLOSE_MODAL_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    MODAL.style.display = 'none';
})

// Отправка формы
SUBMIT.addEventListener('click', (e) => {
    // e.preventDefault();
    MODAL.style.display = 'none';
    SUCCESS_MODAL.style.display = 'flex';
})

// Закрытие окна успешной отправки формы
CLOSE_SUCCESS_MODAL_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    SUCCESS_MODAL.style.display = 'none';
})

// Закрытие окна успешной отправки формы
BACK_SUCCESS_MODAL_BTN.addEventListener('click', (e) => {
    e.preventDefault();
    SUCCESS_MODAL.style.display = 'none';
})