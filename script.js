let hamburgerMenu = document.querySelector('.hamburger-menu');
let container = document.querySelector('.container');

hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('change');
});

let scrollBtn = document.querySelector('.scroll-btn');
let htmlEl = document.querySelector('html');

scrollBtn.addEventListener('click', () => {
    htmlEl.style.scrollBehavior = "smooth";
    setTimeout(() => {
        htmlEl.style.scrollBehavior = "unset";
    }, 1000);
});