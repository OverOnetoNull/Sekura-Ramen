document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const navlist = document.querySelector('.navlist');

    hamburgerButton.addEventListener('click', function () {
        navlist.classList.toggle('show');
    });
});