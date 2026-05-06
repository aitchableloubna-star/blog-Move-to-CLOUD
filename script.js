document.addEventListener('DOMContentLoaded', function() {
    // Initialisation des icônes
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Gestion du menu actif au clic
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Optionnel : Gestion du menu au scroll
    window.addEventListener('scroll', () => {
        let current = "";
        const sections = document.querySelectorAll("header, section");
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach((item) => {
            item.classList.remove("active");
            if (item.getAttribute("href").includes(current)) {
                item.classList.add("active");
            }
        });
    });
});
