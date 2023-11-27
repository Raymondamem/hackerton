const toggleAccordion = document.querySelector('#toggleAccordion');
const toggleAccordion__img = document.querySelector('#closeAcd');
const accordionWrapper__body = document.querySelector('#accordionWrapper__body');
const tip = document.querySelector('.tip');
const tip__close = document.querySelector('.tip__close');
const allAccords = document.querySelectorAll('.accordionWrapper__body__item');
toggleAccordion.addEventListener('click', function () {
    accordionWrapper__body.classList.toggle('active');
    toggleAccordion__img.classList.toggle('active');
});
tip__close.addEventListener('click', function () {
    tip.remove();
});

accordionWrapper__body.addEventListener('click', function (e) {
    const element = e.target;
    if (element && element.classList[0] === 'accordionWrapper__body__item__wrapper__body__header') {
        console.log(element.parentElement.parentElement.parentElement);
        element.parentElement.parentElement.parentElement.classList.toggle('active_currently');
    }

    if (!element) {
        console.log(!element);
    }
});
