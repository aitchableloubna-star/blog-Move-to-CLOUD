// On attend que tout le contenu HTML soit chargé avant de lancer le script
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Initialisation des icônes Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Gestion du menu dynamique (Carré bleu)
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Optionnel : Si vous voulez gérer le défilement manuellement
            // e.preventDefault(); 
            
            // Enlever la classe 'active' de tous les liens
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Ajouter la classe 'active' uniquement sur celui cliqué
            this.classList.add('active');
            
            // Si vous avez utilisé e.preventDefault(), démentez la ligne suivante :
            // const targetId = this.getAttribute('href');
            // document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 3. Bonus : Changer l'état "active" lors du défilement (Scroll)
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section, header');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
});
