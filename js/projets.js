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
        { categorie: ['php', 'all'], image: 'images/projets/bitcoin.jpg', titre:'Convertisseur cryptos', description: 'Description du projet 1', langages: ['PHP', 'MySQL'], about: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates harum similis alias, summatim causas perstringam nusquam a veritate sponte propria digressurus.' },
        { categorie: ['php', 'all'], image: 'images/projets/bitcoin.jpg', titre:'Convertisseur cryptos', description: 'Description du projet 1', langages: ['PHP', 'MySQL'] },
        { categorie: ['symfony', 'all'], image: 'images/projets/todo.jpg', titre:'ToDo List', description: 'Description du projet 2', langages: ['Symfony', 'Doctrine'] },
        { categorie: ['symfony', 'all'], image: 'images/projets/fullbail.jpg', titre:'Blog/social', description: 'Description du projet 2', langages: ['Symfony', 'Doctrine'] },
        { categorie: ['html-css-js', 'all'], image: 'images/projets/velo.jpg',titre:'Location de vélo', description: 'Description du projet 2', langages: ['HTML', 'CSS', 'Javascript'] },
        { categorie: ['wordpress', 'all'], image: 'images/projets/chalet.jpg',titre:'Chalet et Caviar',  description: 'Description du projet 2', langages: ['Wordpress', 'Doctrine'] },
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
                    <h3>${projet.titre}</h3>
                    <div class="langages">
                        ${projet.langages.map(langage => `<span>${langage}</span>`).join('')}
                    </div>
                    <button class="more-btn">More</button> <!-- Ajout du bouton "More" -->
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
    
    // Écouter le clic sur le bouton "More" pour afficher la barre latérale
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('more-btn')) {
            const projetElement = event.target.closest('.projet');
            const sidebar = document.querySelector('.sidebar');
            const overlay = document.querySelector('.overlay');
            const projetTitre = projetElement.querySelector('h3').textContent;
            
            const projetSelectionne = projets.find(projet => projet.titre === projetTitre);
            if (projetSelectionne) {
                sidebar.querySelector('h3').textContent = projetTitre;
                sidebar.querySelector('.more-about-descriptif').textContent = projetSelectionne.description;
                sidebar.querySelector('.more-about-content').textContent = projetSelectionne.about;
                sidebar.querySelector('.more-about-image').src = projetSelectionne.image;
                sidebar.classList.add('show');
                overlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.querySelectorAll('.categorie, .smooth-scroll').forEach(element => {
                    element.style.pointerEvents = 'none';
                });
            }
        }
    });
    
    

    // Sélectionnez tous les éléments avec la classe 'close-btn' et 'close-btn-text'
    const elements = document.querySelectorAll('.close-btn, .close-btn-text');

    // Ajoutez un événement de clic à chaque élément
    elements.forEach(element => {
        element.addEventListener('click', function() {
            document.querySelector('.sidebar').classList.remove('show');
            document.querySelector('.overlay').style.display = 'none';
            document.querySelectorAll('.categorie, .smooth-scroll').forEach(element => {
                element.style.pointerEvents = 'auto';
            });
            document.body.style.overflow = 'auto';
        });
    });


    document.querySelector('.overlay').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.remove('show');
        this.style.display = 'none';
        document.querySelectorAll('.categorie, .smooth-scroll').forEach(element => {
            element.style.pointerEvents = 'auto';
        });
        document.body.style.overflow = 'auto';
    });

    document.querySelector('.return-btn').addEventListener('click', function() {
        document.querySelector('.sidebar').classList.remove('show');
        document.querySelector('.overlay').style.display = 'none';
        document.querySelectorAll('.categorie, .smooth-scroll').forEach(element => {
            element.style.pointerEvents = 'auto';
        });
        document.body.style.overflow = 'auto';
    });

    document.addEventListener('click', function(event) {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.overlay');
        if (!event.target.closest('.sidebar') && !event.target.classList.contains('more-btn')) {
            sidebar.classList.remove('show');
            overlay.style.display = 'none';
            document.querySelectorAll('.categorie, .smooth-scroll').forEach(element => {
                element.style.pointerEvents = 'auto';
            });
            document.body.style.overflow = 'auto';
        }
    });
    
});
