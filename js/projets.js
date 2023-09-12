function ajusterStyleProjets() {
    const projetsListe = document.querySelector('.projets-liste');
    const projets = projetsListe.querySelectorAll('.projet');
    const nombreProjets = projets.length;

    function mettreAJourStyle() {
        if (nombreProjets <= 1) {
            projetsListe.style.gridTemplateColumns = 'repeat(1, 1fr)';
        } else if (nombreProjets <= 2) {
            projetsListe.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else if (nombreProjets <= 3) {
            projetsListe.style.gridTemplateColumns = 'repeat(3, 1fr)';
        } else {
            projetsListe.style.gridTemplateColumns = 'repeat(3, 1fr)';
            // Ajoutez d'autres configurations si nécessaire
        }
    }

    window.requestAnimationFrame(mettreAJourStyle);
}

document.addEventListener('DOMContentLoaded', function() {
    const projets = [
        { categorie: ['php', 'all'], image: 'images/projets/bitcoin.jpg', description: 'Description du projet 1', langages: ['PHP', 'MySQL'] },
        { categorie: ['php', 'all'], image: 'images/projets/bitcoin.jpg', description: 'Description du projet 1', langages: ['PHP', 'MySQL'] },
        { categorie: ['symfony', 'all'], image: 'images/projets/todo.jpg', description: 'Description du projet 2', langages: ['Symfony', 'Doctrine'] },
        { categorie: ['symfony', 'all'], image: 'images/projets/fullbail.jpg', description: 'Description du projet 2', langages: ['Symfony', 'Doctrine'] },
        { categorie: ['html-css-js', 'all'], image: 'images/projets/velo.jpg', description: 'Description du projet 2', langages: ['HTML', 'CSS', 'Javascript'] },
        { categorie: ['wordpress', 'all'], image: 'images/projets/chalet.jpg', description: 'Description du projet 2', langages: ['Wordpress', 'Doctrine'] },
    ];

    function preloadImages(images) {
        images.forEach(imageSrc => {
            const img = new Image();
            img.src = imageSrc;
        });
    }
    
    // Liste des chemins d'images à précharger
    const imagesToPreload = [
        'images/projets/bitcoin.jpg',
        'images/projets/todo.jpg',
        'images/projets/fullbail.jpg',
        'images/projets/velo.jpg',
        'images/projets/chalet.jpg'
        // Ajoutez d'autres chemins d'images si nécessaire
    ];

    // Préchargez les images
    preloadImages(imagesToPreload);

    const projetsListe = document.querySelector('.projets-liste');

    function afficherProjets(categories) {
        projetsListe.innerHTML = '';
        const projetsFiltres = projets.filter(projet => {
            return categories.some(cat => projet.categorie.includes(cat));
        });

        projetsFiltres.forEach(projet => {
            const projetElement = document.createElement('div');
            projetElement.classList.add('projet');

            projetElement.innerHTML = `
                <img src="${projet.image}" alt="Projet">
                <div class="description">
                    <h3>${projet.description}</h3>
                    <div class="langages">
                        ${projet.langages.map(langage => `<span>${langage}</span>`).join('')}
                    </div>
                </div>
            `;

            projetsListe.appendChild(projetElement);

            // Ajout de la classe 'show' après un court délai pour déclencher l'effet d'apparition
            setTimeout(() => {
                projetElement.classList.add('show');
            }, 80);
        });
        setTimeout(ajusterStyleProjets, 100);
    }

    const categories = document.querySelectorAll('.categorie');
    categories.forEach(categorie => {
        categorie.addEventListener('click', function() {
            const categorieSelectionnee = this.dataset.categorie;
            afficherProjets([categorieSelectionnee]);
            mettreAJourStyleCategories(this);
        });
    });

    function mettreAJourStyleCategories(categorieSelectionnee) {
        categories.forEach(categorie => {
            if (categorie === categorieSelectionnee) {
                categorie.style.border = '2px solid #100c0c';
            } else {
                categorie.style.border = 'none';
            }
        });
    }

    // Afficher tous les projets au début
    afficherProjets(['all']);
    ajusterStyleProjets();
});
