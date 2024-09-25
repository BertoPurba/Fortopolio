const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particlesArray = [];

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.95; // Mengecilkan ukuran secara bertahap
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        if (particlesArray[i].size <= 0.5) {
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

canvas.addEventListener('mousemove', function(event) {
    const x = event.x;
    const y = event.y;

    for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle(x, y));
    }
});

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();



        window.onscroll = function() {
            updateProgressBar();
        };
        
        function updateProgressBar() {
            const progressBar = document.getElementById('progressBar');
            
            // Hitung tinggi scroll dan persentase scroll
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let progress = (scrollTop / scrollHeight) * 100;
        
            // Update lebar progress bar sesuai dengan persentase scroll
            progressBar.style.width = progress + '%';
        }

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


    

window.addEventListener('load', () => {
    const navbar = document.querySelector('.navbar');
    const hero = document.querySelector('.hero');

    navbar.classList.add('animate-in');
    hero.classList.add('animate-in');
});



