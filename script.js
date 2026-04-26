// Scroll suave del menú
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const section = document.querySelector(this.getAttribute('href'));

        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animación al aparecer secciones
const animatedElements = document.querySelectorAll(
    '.about, .gallery-item, .barber, .map, .socials'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(element => {
    element.classList.add('hidden');
    observer.observe(element);
});

// Botón flotante WhatsApp
const whatsappBtn = document.createElement('a');
whatsappBtn.href = 'https://wa.me/584122921565';
whatsappBtn.target = '_blank';
whatsappBtn.className = 'whatsapp-float';
whatsappBtn.innerHTML = '💬';
document.body.appendChild(whatsappBtn);

// Botón flotante subir arriba
const topBtn = document.createElement('button');
topBtn.className = 'top-float';
topBtn.innerHTML = '↑';
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        topBtn.classList.add('active');
    } else {
        topBtn.classList.remove('active');
    }
});

// Efecto neón dinámico en el título
const heroTitle = document.querySelector('.hero-content h1');

setInterval(() => {
    if (heroTitle) {
        heroTitle.classList.toggle('neon-active');
    }
}, 1200);

// Scroll reveal
const revealElements = document.querySelectorAll(
    '.gallery-item, .barber, .info-salon, .salon, .map, .socials'
);

revealElements.forEach(element => {
    element.classList.add('reveal');
});

window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

revealOnScroll();


// Parallax en imagen de instrumentos
window.addEventListener('scroll', () => {
    const img = document.querySelector('.info-img img');

    if (img) {
        const position = img.getBoundingClientRect().top;
        img.style.transform = `translateY(${position * -0.04}px)`;
    }
});