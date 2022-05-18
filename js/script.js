
let btn = $('.menu-burger');
let nav = document.querySelector('.nav-wrapper');

btn.on('click', function() {
    $(this).toggleClass('menu-burger__active');
    $(this).toggleClass('menu-burger__not-active');
    $('.main-nav').toggleClass('menu-open');
    $('body').toggleClass('look');
});

window.addEventListener('scroll', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);

function checkScroll() {
    if (scrollY > 28) {
        nav.classList.add('menuScrol');
    }

    else {
        nav.classList.remove('menuScrol');
    }
}