document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        { name: 'php10', level: 85, description: 'J\'ai acquis une solide expérience en PHP au cours de mes études ces dernières années. J\'ai eu l\'opportunité de travailler sur divers aspects du langage, de la programmation orientée objet à la manipulation avancée des bases de données. J\'ai ainsi pu mettre en place plusieurs sites web, renforçant ainsi ma maîtrise de ce langage essentiel. De plus, je suis constamment en veille technologique pour rester à jour avec les dernières versions de PHP et les meilleures pratiques de développement. Cette démarche me permet d\'intégrer les dernières avancées et d\'optimiser mes projets pour des performances optimales.', descriptionTrad: 'I have gained solid experience in PHP over the past few years. I have had the opportunity to work on various aspects of the language, from object-oriented programming to advanced database manipulation. This has allowed me to set up several websites, enhancing my mastery of this essential language. Additionally, I am constantly staying updated with the latest versions of PHP and best development practices. This approach enables me to incorporate the latest advancements and optimize my projects for optimal performance.', color: '#777bb3' },
        { name: 'symfony', level: 80, description: 'Pendant mes études, j\'ai eu l\'occasion de travailler en profondeur avec le framework Symfony. J\'ai développé des applications web robustes et performantes en utilisant les fonctionnalités avancées de ce framework. Cela m\'a permis de comprendre l\'architecture MVC et de maîtriser les bonnes pratiques de développement Symfony. De plus, je reste constamment à l\'affût des dernières nouveautés et tendances dans l\'écosystème Symfony. Je teste régulièrement de nouveaux bundles et fonctionnalités pour rester à jour avec les meilleures pratiques de développement', descriptionTrad: 'During my studies, I had the opportunity to work extensively with the Symfony framework. I developed robust and high-performance web applications using the advanced features of this framework. This allowed me to understand the MVC architecture and master best development practices in Symfony. Furthermore, I am constantly staying updated with the latest trends and innovations in the Symfony ecosystem. I regularly test new bundles and features to keep up with best development practices.', color: '#1a171b' },
        { name: 'html3', level: 90, description: 'J\'ai acquis une solide expérience en HTML au fil des années, depuis mes premiers pas dans la programmation.', descriptionTrad: 'I have gained solid experience in HTML over the years, from my first steps in programming.', color: '#e44f26' },
        { name: 'css3', level: 75, description: 'J\'ai acquis une solide expérience en CSS au fil des années, depuis mes premiers pas dans la programmation.', descriptionTrad: 'I have gained solid experience in CSS over the years, from my first steps in programming.', color: '#1572b6' },
        { name: 'python1', level: 60, description: 'J\'ai utilisé Python dans divers projets, allant de la création d\'un mini-jeu pour PC à la conception d\'une application interne d\'entreprise dédiée à la collecte d\'informations.', descriptionTrad: 'I have used Python in various projects, ranging from creating a mini-game for PC to designing an internal company application dedicated to information collection.', color: '#3776ab' },
        { name: 'javascript17', level: 70, description: 'Javascript est un langage que j\'utilise régulièrement depuis plusieurs années, notamment dans divers projets où il a été essentiel pour ajouter des fonctionnalités interactives et dynamiques', descriptionTrad: 'Javascript is a language I have been using regularly for several years, especially in various projects where it has been essential for adding interactive and dynamic features.', color: '#f7df1e' },
        { name: 'bootstrap4', level: 75, description: 'J\'ai souvent eu recours à Bootstrap dans mes projets pour gagner du temps dans le développement de l\'interface utilisateur. Cela m\'a permis de créer des designs réactifs et esthétiques.', descriptionTrad: 'I have often used Bootstrap in my projects to save time in UI development. This has allowed me to create responsive and aesthetic designs.', color: '#563d7c' },
        { name: 'mysql', level: 80, description: 'J\'utilise MySQL depuis plusieurs années, j\'ai également suivi des formations spécifiques pour approfondir mes connaissances dans ce domaine. Cela m\'a permis de beaucoup mieux comprendre la gestion de bases de données et d\'optimiser les requêtes pour de meilleurs performances.', descriptionTrad: 'I have been using MySQL for several years and have also taken specific training to deepen my knowledge in this field. This has allowed me to better understand database management and optimize queries for better performance.', color: '#cbc6d1' },
        { name: 'responsive2', level: 75, description: 'Le Responsive Design est essentiel dans mes projets, assurant une expérience utilisateur agréable sur tous les appareils.', descriptionTrad: 'Responsive Design is essential in my projects, ensuring an optimal user experience on all devices.', color: '#cbc6d1' },
        { name: 'github18', level: 80, description: 'GitHub est une plateforme que j\'utilise régulièrement pour héberger mes projets et collaborer avec d\'autres développeurs. J\'y partage mes codes source, découvre des projets open source intéressants et contribue à des communautés de développeurs. C\'est un outil incontournable dans mon parcours en tant que développeur.', descriptionTrad: 'GitHub is a platform I regularly use to host my projects and collaborate with other developers. I share my source code, discover interesting open-source projects, and contribute to developer communities. It is an essential tool in my journey as a developer.', color: '#f5f5f5' },
    ];    

    const skillImages = document.querySelectorAll('.icon-card');
    const skillModalsContainer = document.getElementById('skillModals');

    skillImages.forEach(image => {
        image.addEventListener('click', function() {
            const skillName = this.dataset.skill;
            const skill = skills.find(skill => skill.name === skillName);
            document.body.style.overflow = 'hidden';
            const modal = document.createElement('div');
            modal.classList.add('modal','active');
            modal.innerHTML = `
            <div class="card-wrap">
                <span class="close">
                    <div class="sphere">
                        <div class="cross">
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                        </div>
                    </div>
                </span>
                <div class="card-header" style="background-color: ${skill.color};">
                    <img src="images/skills/${skill.name}.svg" alt="${skill.name}">

                    </div>
                    <div class="progress-bar">
                        <div class="progress" style="width: ${skill.level}%;"></div>
                        <span class="progress-percent">${skill.level}%</span>
                    </div>
                    <div class="card-content">
                        <p id="modal-link-${skill.name}" class="card-text">${document.body.classList.contains('en') ? skill.descriptionTrad : skill.description}</p>
                    </div>
                  </div>
            </div>
            `;


            skillModalsContainer.innerHTML = '';
            skillModalsContainer.appendChild(modal);

            modal.style.display = 'block';


            // Fermer le modal en cliquant en dehors de celui-ci
            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.classList.add('slide-out-right');
                    setTimeout(function() {
                        modal.style.display = 'none';
                        modal.classList.remove('slide-out-right');
                        document.body.style.overflow = 'auto'; // Réactive le scroll
                    }, 100); // Attendre 300 ms (la même durée que l'animation)
                }
            });
            // Écouter le clic sur le bouton de fermeture du modal
            modal.querySelector('.close').addEventListener('click', function() {
                    modal.classList.add('slide-out-right');
                    setTimeout(function() {
                        modal.style.display = 'none';
                        modal.classList.remove('slide-out-right');
                        document.body.style.overflow = 'auto'; // Réactive le scroll
                    }, 100); // 
            });


            // Fermer le modal en appuyant sur la touche "Escape"
            window.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    modal.classList.add('slide-out-right');
                    setTimeout(function() {
                        modal.style.display = 'none';
                        modal.classList.remove('slide-out-right');
                        document.body.style.overflow = 'auto'; // Réactive le scroll
                    }, 100);
                }
            });
        });
    });
});
