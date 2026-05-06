// Initialisation des icônes Lucide
lucide.createIcons();

// Animation d'apparition au défilement (Scroll Reveal)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.classList.add('fade-in');
    observer.observe(card);
});

// Ajout d'un petit effet au scroll pour la navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "0.5rem 5%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        navbar.style.padding = "1rem 5%";
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
    }
});
