document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.querySelector('.toggle-checkbox');
    const socialBackground = document.querySelector('.social-background');
    const selectedArrow = document.querySelector(".selected-language span");
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
        document.querySelector('.name.waviy.second.night-mode-text'),
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
        document.querySelector('.time.pa.night-mode-text'),
        document.querySelector('.time.pe.night-mode-text'),
        document.querySelector('.time.po.night-mode-text'),
        document.querySelector('.time.pu.night-mode-text'),
        document.querySelector('.smm.night-mode-text'),
        document.querySelector('.sml.night-mode-text'),
        document.querySelector('.smg.night-mode-text'),
        document.querySelector('.smc.night-mode-text'),
        document.querySelector('.bounce0.night-mode-text'),
        document.querySelector('.bounce1.night-mode-text'),
        document.querySelector('.bounce2.night-mode-text'),
        document.querySelector('.bounce3.night-mode-text'),
        document.querySelector('li.do.night-mode-text'),
        document.querySelector('li.re.night-mode-text'),
        document.querySelector('li.mi.night-mode-text'),
        document.querySelector('li.fa.night-mode-text'),
        document.querySelector('i.bx.night-mode-text'),
        document.querySelector('.menu.night-mode-text'),
        document.querySelector('.hov.night-mode-text'),
        document.querySelector('.nav-links.night-mode-text.main'),
        document.querySelector('.more-btn.night-mode-text'),
    ];

    toggleCheckbox.addEventListener('change', function() {
        if (!this.checked) {
            // Mode jour
            socialBackground.classList.remove('night-mode');
            socialBackground.classList.add('day-mode');
            selectedArrow.classList.remove('night-mode-text');
            selectedArrow.classList.add('day-mode-text');
            elementsToToggle.forEach(element => {
                element.classList.remove('night-mode-text');
                element.classList.add('day-mode-text');
            });
        } else {
            // Mode nuit
            socialBackground.classList.remove('day-mode');
            socialBackground.classList.add('night-mode');
            selectedArrow.classList.remove('day-mode-text');
            selectedArrow.classList.add('night-mode-text');
            elementsToToggle.forEach(element => {
                element.classList.remove('day-mode-text');
                element.classList.add('night-mode-text');
            });
        }
    });
});
