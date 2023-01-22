// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika humberger menu diklik
document.querySelector('#humberger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// KLik diluar sidebar untuk hilangkan nav
const humberger = document.querySelector ('#humberger-menu');

document.addEventListener('click', function (e) {
    if (!humberger.contains (e.target) && !navbarNav.contains (e.target)) {
        navbarNav.classList.remove ('active');
    }
});