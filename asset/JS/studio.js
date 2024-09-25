window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    navbar.classList.add('animate-in');
    hero.classList.add('animate-in');
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navLinks.classList.toggle('active');
});


const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
} else {
    backToTopBtn.style.display = "none";
}
}


backToTopBtn.addEventListener('click', function() {
window.scrollTo({
    top: 0,
    behavior: 'smooth' 
});
});
