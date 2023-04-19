function openMenuMobile() {
    document.querySelector('.header__nav').classList.add('open');
    document.querySelector('.overlay-menu-mobile').classList.add('open');
}

function closeMenuMobile() {
    document.querySelector('.header__nav').classList.remove('open');
    document.querySelector('.overlay-menu-mobile').classList.remove('open');
}