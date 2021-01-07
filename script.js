let hamburgerMenu = document.querySelector('.hamburger-menu');
let container = document.querySelector('.container');

hamburgerMenu.addEventListener('click', () => {
    container.classList.toggle('change');
});