function loadScripts() {
    const scripts = [
        'json-langues/fr.json',
        'json-langues/en.json',
        'js/translate-btn.js',
        'js/projets.js',
        'js/style.js',
        'js/night-mode.js',
        'js/nav-responsive.js',
        'js/smooth-ancre-scroll.js',
        'js/timeline.js',
        'js/timeline.js',
        'js/nav-scroll.js',
        'js/socials-icons.js',
        'js/animation-about-me.js',
        'js/skills-modal-effect.js',
        // Ajoutez ici tous les noms de fichiers de vos scripts
    ];

    scripts.forEach(function(script) {
        const scriptElement = document.createElement('script');
        scriptElement.src = script;
        document.body.appendChild(scriptElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadScripts();
    // Votre code ici...
});
