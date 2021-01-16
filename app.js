const burgerBtn = document.getElementsByClassName('navigation__burger-menu');
const menu = document.querySelector('.navigation__mobile');
const logo = document.querySelector('.logo')


function transformBtn() {
    burgerBtn[0].classList.toggle('open');
    burgerBtn[0].classList.toggle('hide-for-desktop')
    burgerBtn[0].classList.toggle('fixed');
    logo.classList.toggle('fixed')
}

function toggleHidden() {
    menu.classList.toggle('hidden');
}


burgerBtn[0].addEventListener('click', () => {
    toggleHidden();
    transformBtn();

});

