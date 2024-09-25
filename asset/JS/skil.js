


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

// Select all the TOC links and sections
const tocLinks = document.querySelectorAll('.toc ul li a');
const sections = document.querySelectorAll('section');

// Function to remove the active class from all links
function clearActiveStates() {
    tocLinks.forEach(link => link.classList.remove('active'));
}

// Add smooth scrolling behavior when TOC links are clicked
tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Prevent default jump behavior
        
        // Get the target section
        const target = document.querySelector(this.getAttribute('href'));
        
        // Temporarily scroll up by 1 pixel to trigger the scrolling even if the section is already visible
        window.scrollBy(0, -1);
        
        // Scroll into view
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        clearActiveStates();  // Remove active from all
        this.classList.add('active');  // Add active to clicked link
    });
});

// Update active state on scroll
window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {  // Adjust this offset as needed
            currentSection = section.getAttribute('id');
        }
    });

    tocLinks.forEach(link => {
        clearActiveStates();  // Clear all active states
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');  // Set active on current section
        }
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
