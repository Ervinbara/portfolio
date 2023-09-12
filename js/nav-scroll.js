var bannerHeight = document.getElementById('accueil').offsetHeight;
var triggerPosition = bannerHeight * 0.98;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition < triggerPosition) {
        document.querySelector('nav').classList.remove('nav-scrolled');
    } else {
        document.querySelector('nav').classList.add('nav-scrolled');
    }
    
    // Ajoutez une transition pour l'opacité
    document.querySelector('nav').style.transition = 'opacity 0.9s ease-in-out';
});
