const iconMenu = document.querySelector('.iconMenu');
const mobileMenu = document.querySelector('.mobileMenu');

iconMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.classList.toggle('inactive');
}
    
