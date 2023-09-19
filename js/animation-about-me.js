document.addEventListener('DOMContentLoaded', function() {
    const aboutMeSection = document.querySelector('.about-me'); // Sélection de la section "about-me"
    const logo = document.querySelector('.logo'); // Sélection du logo

    window.addEventListener('scroll', function() {
        const elementPosition = aboutMeSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            logo.classList.add('active');
        }
    });
});
