// Initialisation des icônes Lucide
lucide.createIcons();

// Gestion dynamique du menu (carré bleu)
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        navItems.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});
