window.onscroll = function () {
    const header = document.querySelector('nav');
    const fixedNav = nav.offsetTop;

    if (window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

console.log('success');
