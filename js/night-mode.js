document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const mode = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('mode', mode);

        // Changement de l'icône
        const icon = document.querySelector('#toggle-mode i');
        if (mode === 'dark') {
            icon.classList.remove('fa-regular', 'fa-moon');
            icon.classList.add('fa-solid', 'fa-moon');
        } else {
            icon.classList.remove('fa-solid', 'fa-moon');
            icon.classList.add('fa-regular', 'fa-moon');
        }
    });

    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode + '-mode');

        // Mettez à jour l'icône lors du chargement de la page
        const icon = document.querySelector('#toggle-mode i');
        if (savedMode === 'dark') {
            icon.classList.remove('fa-regular', 'fa-moon');
            icon.classList.add('fa-solid', 'fa-moon');
        } else {
            icon.classList.remove('fa-solid', 'fa-moon');
            icon.classList.add('fa-regular', 'fa-moon');
        }
    }
});
