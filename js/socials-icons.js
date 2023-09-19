document.addEventListener('DOMContentLoaded', function() {
    const socialIcons = document.querySelector('.social-icons');
    const aboutMeSection = document.querySelector('#about-me');

    window.addEventListener('scroll', function() {
        if (window.scrollY > aboutMeSection.offsetTop + aboutMeSection.offsetHeight) {
            socialIcons.style.opacity = '1';
        } else {
            socialIcons.style.opacity = '0';
        }
    });
});
