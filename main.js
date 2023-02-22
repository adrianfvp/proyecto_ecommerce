const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu'); 

emailMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}