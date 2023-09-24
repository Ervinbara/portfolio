document.addEventListener('DOMContentLoaded', function() {
    const skills = [
        { name: 'php10', level: 100, description: 'Description of your experience with PHP coco.', color: '#777bb3' },
        { name: 'symfony', level: 80, description: 'Description of your experience with caca.', color: '#1a171b' },
        { name: 'html3', level: 75, description: 'Description of your experience with PHP.', color: '#e44f26' },
        { name: 'css3', level: 75, description: 'Description of your experience with PHP.', color: '#1572b6' },
        { name: 'python1', level: 75, description: 'Description of your experience with PHP.', color: '#3776ab' },
        { name: 'javascript17', level: 75, description: 'Description of your experience with PHP.', color: '#f7df1e' },
        { name: 'bootstrap4', level: 75, description: 'Description of your experience with PHP.', color: '#563d7c' },
        { name: 'mysql', level: 75, description: 'Description of your experience with PHP.', color: '#cbc6d1' },
        { name: 'responsive2', level: 75, description: 'Description of your experience with PHP.', color: '#cbc6d1' },
        { name: 'github18', level: 75, description: 'Description of your experience with PHP.', color: '#f5f5f5' },
        // Ajoutez d'autres compétences au besoin
    ];

    const skillImages = document.querySelectorAll('.icon-card');
    const skillModalsContainer = document.getElementById('skillModals');

    skillImages.forEach(image => {
        image.addEventListener('click', function() {
            const skillName = this.dataset.skill;
            console.log(skillName);
            const skill = skills.find(skill => skill.name === skillName);
            // const skill = skills.find();
            // Bloquer le fond du site
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
                      <h1 class="card-title">Title</h1>
                      <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
