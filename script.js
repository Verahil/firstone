document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        navLinks.classList.toggle('active');
        logo.classList.toggle('active');
    });
});
