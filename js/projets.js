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
        { categorie: ['php', 'all'], image: 'images/projets/bitcoin.jpg', website:'http://convertisseur-crypto.com/', github:'https://github.com/Ervinbara/BitVin', titre:'Convertisseur cryptos', description: 'Site de conversion et d\'analyse de cryptomonnaie', langages: ['PHP', 'MySQL'], about: 'Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates harum similis alias, summatim causas perstringam nusquam a veritate sponte propria digressurus.' },
        { categorie: ['php', 'all'], image: 'images/projets/bitcoin.jpg', website:'', github:'', titre:'Convertisseur cryptos', description: 'Description du projet 1', langages: ['PHP', 'MySQL'], about: '' },
        { categorie: ['symfony', 'all'], image: 'images/projets/todo.jpg', website:'https://todo.ervinbara-projet.com/', github:'https://github.com/Ervinbara/Projet_8_B', titre:'ToDo List', description: 'Formation "Développeur d\'application - PHP/SYMFONY".', langages: ['Symfony', 'Doctrine'], about: 'J\'ai développé ce projet dans le cadre de ma formation en développement d\'applications PHP/Symfony. Il s\'agissait de reprendre et d\'améliorer une application existante, d\'implémenter des tests unitaires et fonctionnels, d\'ajouter de nouvelles fonctionnalités selon un plan de collaboration établi, ainsi que de lire et comprendre du code écrit par d\'autres développeurs. il fallait aussi produire des rapports d\'exécution des tests, d\'analyser la qualité et la performance du code, et de proposer des plans pour réduire la dette technique.' },
        { categorie: ['symfony', 'all'], image: 'images/projets/fullbail2.jpg', website:'https://full-bail.ervinbara-projet.com', github:'', titre:'Blog/social', description: 'Fonctionnel mais toujours en cours de développement', langages: ['Symfony', 'Doctrine', 'Javascript'], about: 'Ce site offre une expérience interactive où les utilisateurs peuvent créer des comptes, se connecter via Google, suivre d\'autres utilisateurs et être suivis en retour. Ils peuvent également rechercher des profils, commenter des publications, interagir avec les commentaires, et exprimer leur appréciation en "likant" des commentaires. Le fil d\'actualité personnalisé affiche les articles des personnes suivies. Chaque utilisateur dispose d\'un tableau de bord pour créer, gérer et publier ses propres articles avec des images, du texte et des médias. De plus, le système de messagerie privée permet des interactions directes entre les utilisateurs.' },
        { categorie: ['html-css-js', 'all'], image: 'images/projets/bitcoin.jpg', website:'', github:'', titre:'Location de vélo', description: 'Description du projet 2', langages: ['HTML', 'CSS', 'Javascript'], about: '' },
        { categorie: ['wordpress', 'all'], image: 'images/projets/chalet.jpg', website:'https://chalet.ervinbara-projet.com/', github:'', titre:'Chalet et Caviar',  description: 'Formation "Développeur d\'application - PHP/SYMFONY".', langages: ['Wordpress', 'Php'], about: 'J\'ai réalisé ce projet dans le cadre de ma formation en développement d\'applications PHP/Symfony. Les compétences évaluées incluent : \
        Rédiger une documentation à l\'intention d\'utilisateurs non spécialistes. Sélectionner un thème WordPress adapté aux besoins du client. Adapter un thème WordPress pour respecter les exigences du client' },
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
                    <button class="more-btn">+</button>
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
                categorie.style.backgroundColor = '#092756'; // Mettre à jour la couleur de fond
                categorie.style.color = '#fff'; // Mettre à jour la couleur du texte
            } else {
                categorie.style.border = 'none';
                categorie.style.backgroundColor = '#fff'; // Rétablir la couleur de fond par défaut
                categorie.style.color = '#092756'; // Rétablir la couleur du texte par défaut
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
    
                // Récupérer la liste des technologies
                const technologiesList = sidebar.querySelector('.technologies-list');
                technologiesList.innerHTML = ''; // Effacer les anciennes technologies
    
                projetSelectionne.langages.forEach(langage => {
                    const listItem = document.createElement('li');
                    listItem.textContent = langage;
                    technologiesList.appendChild(listItem);
                });

                // Récupération des liens vers le site/github
                const socialLinkSection = document.querySelector('.section-social-link');
                socialLinkSection.innerHTML = ''; // Supprime le contenu précédent

                if (projetSelectionne.website) {
                    const websiteLink = document.createElement('a');
                    websiteLink.href = projetSelectionne.website;
                    websiteLink.target = '_blank';
                    websiteLink.classList.add('website'); // Ajoute la classe 'website'
                
                    const websiteIcon = document.createElement('i');
                    websiteIcon.classList.add('fa-solid', 'fa-globe'); // Ajoute les classes pour l'icône globe
                
                    websiteLink.appendChild(websiteIcon); // Ajoute l'icône au lien
                    websiteLink.appendChild(document.createTextNode(' Voir le site')); // Ajoute le texte du lien
                
                    socialLinkSection.appendChild(websiteLink);
                }
                
                if (projetSelectionne.github) {
                    const githubLink = document.createElement('a');
                    githubLink.href = projetSelectionne.github;
                    githubLink.target = '_blank';
                    githubLink.classList.add('github'); // Ajoute la classe 'github'
                
                    const githubIcon = document.createElement('i');
                    githubIcon.classList.add('fab', 'fa-github'); // Ajoute les classes pour l'icône GitHub
                
                    githubLink.appendChild(githubIcon); // Ajoute l'icône au lien
                    githubLink.appendChild(document.createTextNode(' Voir sur GitHub')); // Ajoute le texte du lien
                
                    socialLinkSection.appendChild(githubLink);
                }
                
                const socialBackground = document.querySelector('.social-background');

                // Vérifiez si la div social-background possède la classe day-mode
                if (socialBackground.classList.contains('day-mode')) {
                    // Si oui, ajoutez la classe day-mode-text à la sidebar
                    sidebar.classList.remove('night-mode-text');
                    sidebar.classList.add('day-mode-text');
                } else {
                    // Sinon, ajoutez la classe night-mode-text à la sidebar
                    sidebar.classList.remove('day-mode-text');
                    sidebar.classList.add('night-mode-text');
                }

    
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
