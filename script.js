lucide.createIcons();

// GESTION DU CARRÉ BLEU DYNAMIQUE
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Supprime la classe active de tous les onglets
        navItems.forEach(nav => nav.classList.remove('active'));
        // Ajoute la classe active uniquement à celui cliqué
        this.classList.add('active');
    });
});

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
