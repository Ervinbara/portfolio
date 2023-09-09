document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.smooth-scroll');

    links.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
