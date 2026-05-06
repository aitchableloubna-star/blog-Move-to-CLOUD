lucide.createIcons();

// GESTION DU CARRÉ BLEU DYNAMIQUE
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Enlever la classe active de TOUS les liens
        navItems.forEach(nav => nav.classList.remove('active'));
        // Ajouter la classe active seulement à celui cliqué
        this.classList.add('active');
    });
});
