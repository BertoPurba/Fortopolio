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

const meloImage = document.getElementById('melo');
meloImage.addEventListener('mouseenter', () => {
    meloImage.classList.add('active');
});

meloImage.addEventListener('mouseleave', () => {
    setTimeout(() => {
        meloImage.classList.remove('active');
    }, 30000); 
});

window.addEventListener('scroll', () => {
    const scrollText = document.querySelector('.scroll-text');
    const textPosition = scrollText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (textPosition < screenPosition) {
        const words = document.querySelectorAll('.fade-in-text .word');
        words.forEach((word, index) => {
            setTimeout(() => {
                word.classList.add('visible');
            }, index * 300); 
        });
    }
});


document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
    });
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
