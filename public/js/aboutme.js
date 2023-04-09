document.getElementById('about-me').addEventListener('scroll', scrollAnimation);

function scrollAnimation() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById('title-about').classList.toggle('hidden');
    }
}
