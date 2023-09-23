document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.querySelector('.toggle-checkbox');
    const socialBackground = document.querySelector('.social-background');
    const moonIcon = document.querySelector('.moon');
    const sunIcon = document.querySelector('.sun');

    // Tableau d'élément à modifier pour le mode nuit
    const elementsToToggle = [
        document.querySelector('h1.heading-primary.night-mode-text'),
        document.querySelector('h2.night-mode-text'),
        document.querySelector('h2.night-mode-text.skill-header'),
        document.querySelector('h2.porojou.night-mode-text'),
        document.querySelector('p'),
        document.querySelector('.nav-links.night-mode-text'),
        document.querySelector('.name.waviy.night-mode-text'),
        document.querySelector('.about-me-title.night-mode-text'),
        document.querySelector('.text.night-mode-text'),
        document.querySelector('h3.pa.night-mode-text'),
        document.querySelector('h3.pe.night-mode-text'),
        document.querySelector('h3.po.night-mode-text'),
        document.querySelector('h3.pu.night-mode-text'),
        document.querySelector('p.pa.night-mode-text'),
        document.querySelector('p.pe.night-mode-text'),
        document.querySelector('p.po.night-mode-text'),
        document.querySelector('p.pu.night-mode-text'),
        document.querySelector('h2.contaktou.night-mode-text'),
        document.querySelector('.slg.night-mode-text'),
        document.querySelector('.sll.night-mode-text'),
        document.querySelector('.slc.night-mode-text'),
        document.querySelector('.fc.night-mode-text'),
        document.querySelector('.creator-text.night-mode-text'),
        document.querySelector('.social-icons.night-mode-text'),
        document.querySelector('.projects-btn.night-mode-text'),
        // Ajoutez d'autres sélecteurs au besoin
    ];

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // Mode jour
            socialBackground.classList.remove('night-mode');
            socialBackground.classList.add('day-mode');
            elementsToToggle.forEach(element => {
                element.classList.remove('night-mode-text');
                element.classList.add('day-mode-text');
            });
        } else {
            // Mode nuit
            socialBackground.classList.remove('day-mode');
            socialBackground.classList.add('night-mode');
            elementsToToggle.forEach(element => {
                element.classList.remove('day-mode-text');
                element.classList.add('night-mode-text');
            });
        }
    });
});
