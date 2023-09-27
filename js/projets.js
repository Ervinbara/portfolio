
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
        { 
            categorie: ['html-css-js', 'all'],
            image: 'images/projets/bitcoin.jpg', 
            website:'http://convertisseur-crypto.com/', 
            github:'https://github.com/Ervinbara/BitVin', 
            titre:'Convertisseur cryptos', 
            description: 'Site de conversion et d\'analyse de cryptomonnaie (En cours de développement)', 
            langages: ['HTML', 'CSS', 'Javascript'], 
            about: 'Petit projet JavaScript qui utilise l\'API "cryptocompare" pour récupérer des données liées aux cryptomonnaies. Les fonctionnalités actuelles incluent la conversion entre différentes cryptomonnaies, un graphique interactif pour visualiser les cours en temps réel, ainsi qu\'un classement des cryptomonnaies populaires. Les améliorations prévues comprennent une prise en charge étendue de nouvelles cryptomonnaies, des outils d\'analyse avancés, une personnalisation du graphique, et l\'intégration d\'un portefeuille virtuel pour le suivi des investissements.',
            descriptionTrad: 'Cryptocurrency conversion and analysis site (Currently under development)', 
            aboutTrad: 'Small JavaScript project that uses the "cryptocompare" API to retrieve cryptocurrency-related data. Current features include conversion between different cryptocurrencies, an interactive chart to visualize real-time prices, as well as a ranking of popular cryptocurrencies. Planned enhancements include extended support for new cryptocurrencies, advanced analysis tools, chart customization, and integration of a virtual portfolio for investment tracking.'
        },
            
        { 
            categorie: ['symfony', 'all'],
            image: 'images/projets/keyomo.jpg', 
            website:'', 
            github:'https://github.com/Ervinbara/KeYoMo', 
            titre:'Keep your money', 
            langages: ['PHP', 'MySQL', 'Symfony','React'], 
            description: 'Site de gestion de portefeuille et de client', 
            descriptionTrad: 'Portfolio and client management site',
            about: 'Ce projet est une interface utilisant Symfony et React qui nous permet de gérer les dettes de nos clients. Il offre une vue claire de qui nous doit quoi, et nous permet d\'ajouter de nouveaux clients facilement',
            aboutTrad: 'This project is an interface using Symfony and React that allows us to manage our clients\' debts. It provides a clear view of who owes us what, and allows us to easily add new clients.'
        },
        { 
            categorie: ['symfony', 'all'], 
            image: 'images/projets/todo.jpg', 
            website:'https://todo.ervinbara-projet.com/', 
            github:'https://github.com/Ervinbara/Projet_8_B', 
            titre:'ToDo List', 
            langages: ['Symfony', 'Doctrine', 'PHPUnit'], 
            description: 'Formation "Développeur d\'application - PHP/SYMFONY"', 
            descriptionTrad: 'Backend developer degree PHP/Symfony',
            about: 'J\'ai développé ce projet dans le cadre de ma formation en développement d\'applications PHP/Symfony. Il s\'agissait de reprendre et d\'améliorer une application existante, d\'implémenter des tests unitaires et fonctionnels, d\'ajouter de nouvelles fonctionnalités selon un plan de collaboration établi, ainsi que de lire et comprendre du code écrit par d\'autres développeurs. il fallait aussi produire des rapports d\'exécution des tests, d\'analyser la qualité et la performance du code, et de proposer des plans pour réduire la dette technique.',
            aboutTrad: 'I developed this project as part of my training in PHP/Symfony application development. The goal was to take over and enhance an existing application, implement unit and functional tests, add new features according to an established collaboration plan, as well as read and understand code written by other developers. It was also necessary to generate test execution reports, analyze code quality and performance, and propose plans to reduce technical debt.'
        },
        { 
            categorie: ['symfony', 'all'],
            image: 'images/projets/fullbail2.jpg', 
            website:'https://full-bail.ervinbara-projet.com', 
            github:'', 
            titre:'Blog/social', 
            description: 'Fonctionnel mais toujours en cours de développement', 
            langages: ['Symfony', 'Doctrine', 'Javascript'], 
            about: 'Ce site offre une expérience interactive où les utilisateurs peuvent créer des comptes, se connecter via Google, suivre d\'autres utilisateurs et être suivis en retour. Ils peuvent également rechercher des profils, commenter des publications, interagir avec les commentaires, et exprimer leur appréciation en "likant" des commentaires. Le fil d\'actualité personnalisé affiche les articles des personnes suivies. Chaque utilisateur dispose d\'un tableau de bord pour créer, gérer et publier ses propres articles avec des images, du texte et des médias. De plus, le système de messagerie privée permet des interactions directes entre les utilisateurs.',
            descriptionTrad: 'Functional but still in development',
            aboutTrad: 'This site offers an interactive experience where users can create accounts, log in via Google, follow other users, and be followed in return. They can also search for profiles, comment on posts, interact with comments, and express their appreciation by "liking" comments. The personalized news feed displays the articles of the followed people. Each user has a dashboard to create, manage, and publish their own articles with images, text, and media. In addition, the private messaging system allows for direct interactions between users.'
        },
        {
            categorie: ['html-css-js', 'all'],
            image: 'images/projets/velo2.jpg',
            website:'https://location-de-velo.ervinbara-projet.com/',
            github:'https://github.com/Ervinbara/Projet_3',
            titre:'Carte interactive de location de vélos',
            description: 'Formation développeur Web',
            langages: ['HTML', 'CSS', 'Javascript'],
            about: 'Ce projet a été réalisé dans le cadre de ma formation de développeur web. Les compétences évaluées incluent la récupération de données de formulaires en utilisant JavaScript avec une approche Orientée Objet. J\'ai également créé un diaporama fonctionnel sans recourir à des plugins tiers, et écrit un code source clair et lisible. J\'ai dû effectuer des requêtes HTTP en JavaScript et créer des objets simples avec des méthodes et des propriétés.',
            descriptionTrad: 'Web developer degree',
            aboutTrad: 'This project was carried out as part of my web developer training. The evaluated skills included retrieving form data using JavaScript with an Object-Oriented approach. I also created a functional slideshow without resorting to third-party plugins, and wrote clear and readable source code. I had to make HTTP requests in JavaScript and create simple objects with methods and properties.'
        },
        {
            categorie: ['html-css-js', 'all'],
            image: 'images/projets/webagency.jpg',
            website:'https://ervinbara-projet.com/',
            github:'https://github.com/Ervinbara/WebAgency',
            titre:'Web agency',
            description: 'Formation développeur Web',
            langages: ['HTML', 'CSS', 'Javascript'],
            about: 'Ce projet a été réalisé dans le cadre de ma formation de développeur web. J\'ai notamment été évalué sur ma capacité à coder la présentation d\'une page web en CSS, à définir le contenu à partir d\'une maquette, et à gérer la structure en HTML. De plus, il fallait gérer la responsivité du site grâce à l\'utilisation des Media Queries.',
            descriptionTrad: 'Web developer degree',
            aboutTrad: 'This project was carried out as part of my web developer training. I was particularly evaluated on my ability to code the presentation of a web page in CSS, to define the content from a mockup, and to manage the structure in HTML. In addition, I had to handle the site\'s responsiveness through the use of Media Queries.'
        },
        { 
            categorie: ['html-css-js', 'all'], 
            image: 'images/projets/festival.jpg', 
            website:'https://festival-de-films.ervinbara-projet.com/', 
            github:'', 
            titre:'Festival de films', 
            description: 'Formation "Développeur d\'application - PHP/SYMFONY"', 
            langages: ['HTML', 'CSS', 'Javascript', 'Bootstrap'], 
            about: 'Dans le cadre de ma formation en développement PHP Symfony, j\'ai eu l\'opportunité de mettre en place un projet évaluant diverses compétences essentielles. Cela inclut la capacité à répertorier et comprendre les fonctionnalités requises par un client, ainsi que l\'analyse approfondie d\'un cahier des charges. J\'ai également acquis l\'aptitude à rédiger des spécifications détaillées pour le projet et à choisir une solution technique appropriée parmi les options disponibles.',
            descriptionTrad: 'Backend developer degree PHP/Symfony',
            aboutTrad: 'As part of my PHP Symfony developer training, I had the opportunity to set up a project assessing various essential skills. This includes the ability to list and understand the functionalities required by a client, as well as the in-depth analysis of a specifications document. I also acquired the ability to write detailed specifications for the project and to choose an appropriate technical solution from the available options.'
        },        
        { 
            categorie: ['wordpress', 'all'],
            image: 'images/projets/chalet.jpg', 
            website:'https://chalet.ervinbara-projet.com/', 
            github:'', 
            titre:'Chalet et Caviar', 
            description: 'Formation "Développeur d\'application - PHP/SYMFONY"', 
            langages: ['Wordpress', 'Php'], 
            about: 'J\'ai réalisé ce projet dans le cadre de ma formation en développement d\'applications PHP/Symfony. Les compétences évaluées incluent : \
        Rédiger une documentation à l\'intention d\'utilisateurs non spécialistes. Sélectionner un thème WordPress adapté aux besoins du client. Adapter un thème WordPress pour respecter les exigences du client',
            descriptionTrad: 'Backend developer degree - PHP/SYMFONY', 
            aboutTrad: 'I carried out this project as part of my training in the development of PHP/Symfony applications. The skills assessed include: Writing documentation for non-specialist users. Selecting a WordPress theme adapted to the client\'s needs. Adapting a WordPress theme to meet the client\'s requirements'
        },        
        { 
            categorie:['symfony', 'all'],
            image: 'images/projets/dojo.jpg', 
            website:'', 
            github:'', 
            titre:'Dojo', 
            description: 'Réseau social de coaching', 
            langages: ['PHP', 'MySQL','MercureBundle'], 
            about: 'Ce site (actuellement en cours de maintenance) offre une plateforme combinant blog et réseau social dédiée à une équipe de coachs sportifs. Il permet la publication d\'articles pertinents dans le domaine du sport. Les adhérents peuvent créer leur propre compte utilisateur, parcourir les articles publiés, et interagir grâce à un système de likes et de commentaires pour chaque publication. De plus grâce au bundle Mercure un système de discussions privées en temps réel entre les utilisateurs du site a été mis en place.',
            descriptionTrad: 'Social coaching network',
            aboutTrad: 'This site (currently under maintenance) offers a platform combining a blog and a social network dedicated to a team of sports coaches. It allows the publication of relevant articles in the field of sports. Members can create their own user account, browse published articles, and interact through a system of likes and comments for each publication. Additionally, thanks to the Mercure bundle, a system of private real-time discussions between site users has been implemented.'
        },        
        { 
            categorie:['php', 'all'],
            image: 'images/projets/p7.jpg', 
            website:'', 
            github:'https://github.com/Ervinbara/projet_7', 
            titre:'BileMo', 
            description: 'Formation "Développeur d\'application - PHP/SYMFONY".', 
            langages: ['PHP', 'MySQL'], 
            about: 'L\'objectif du projet a été de mettre en place un certain nombre d\'API afin que d\'autres applications de la plateforme web puissent effectuer des opérations.',
            descriptionTrad: 'Backend developer degree - PHP/SYMFONY.', 
            aboutTrad: 'The objective of the project was to set up a number of APIs so that other web platform applications could perform operations.'
        },        
        { 
            categorie:['symfony', 'all'],
            image: 'images/projets/snowboard.jpg', 
            website:'', 
            github:'https://github.com/Ervinbara/Projet_6', 
            titre:'Site communautaire SnowTricks', 
            description: 'Parcours Développeur d\'application - PHP/SYMFONY', 
            langages: ['PHP', 'MySQL'], 
            about: 'L\'objectif de ce projet est de développer un site communautaire de partage de figures de snowboard.',
            descriptionTrad: 'Backend developer degree - PHP/SYMFONY.', 
            aboutTrad: 'The goal of this project is to develop a community platform for sharing snowboarding tricks among a community of snowboarding enthusiasts. Users can sign up, log in, create, edit and delete their own tricks. They can also comment on other users\' tricks.'
        },        
        { 
            categorie:['php', 'all'],
            image: 'images/projets/blog.jpg', 
            website:'', 
            github:'https://github.com/Ervinbara/Projet_5', 
            titre:'Blog en PHP', 
            description: 'Parcours Développeur d\'application - PHP/SYMFONY', 
            langages: ['PHP', 'MySQL'], 
            about: 'L\'objectif de ce projet à été de développer un blog professionnel, avec un groupe de pages accesible aux "visiteurs/utilisateurs" et une autre partie uniquement accesible aux "administrateurs".',
            descriptionTrad: 'Backend developer degree - PHP/SYMFONY', 
            aboutTrad: 'The goal of this project was to develop a professional blog, with a set of pages accessible to "visitors/users" and another part accessible only to "administrators".'
        },        
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
        'images/projets/keyomo.jpg',
        'images/projets/todo.jpg',
        'images/projets/fullbail2.jpg',
        'images/projets/velo2.jpg',
        'images/projets/webagency.jpg',
        'images/projets/festival.jpg',
        'images/projets/chalet.jpg',
        'images/projets/blog.jpg',
        'images/projets/snowboard.jpg',
        'images/projets/p7.jpg',
        'images/projets/dojo.jpg',
        'images/projets/webagency.jpg',
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
                const body = document.querySelector('body');

                if (body.classList.contains('fr')) {
                    sidebar.querySelector('.more-about-descriptif').textContent = projetSelectionne.description;
                    sidebar.querySelector('.more-about-content').textContent = projetSelectionne.about;
                } else if (body.classList.contains('en')) {
                    sidebar.querySelector('.more-about-descriptif').textContent = projetSelectionne.descriptionTrad;
                    sidebar.querySelector('.more-about-content').textContent = projetSelectionne.aboutTrad;
                }

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
                    if (body.classList.contains('fr')) {
                        websiteLink.appendChild(document.createTextNode(' Voir le site')); // Ajoute le texte du lien
                    } else if (body.classList.contains('en')) {
                        websiteLink.appendChild(document.createTextNode(' See on the website')); // Ajoute le texte du lien
                    }
                
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
                    if (body.classList.contains('fr')) {
                        githubLink.appendChild(document.createTextNode(' Voir sur GitHub')); // Ajoute le texte du lien
                    } else if (body.classList.contains('en')) {
                        githubLink.appendChild(document.createTextNode(' See on Github')); // Ajoute le texte du lien
                    }
                
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
