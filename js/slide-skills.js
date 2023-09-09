// document.addEventListener('DOMContentLoaded', function() {
//     const skillsSlideshow = document.querySelector('.skills-slideshow');
//     let isHovered = false;
  
//     // Fonction pour faire défiler les compétences
//     function slideSkills() {
//         if (!isHovered) {
//             const firstSkill = skillsSlideshow.firstElementChild;
//             skillsSlideshow.appendChild(firstSkill);
//         }
//         setTimeout(slideSkills, 2000); // Changez le temps en millisecondes pour la vitesse de défilement
//     }
  
//     // Démarrez le diaporama
//     slideSkills();
  
//     // Gérez les événements de survol de la souris
//     skillsSlideshow.addEventListener('mouseenter', () => {
//         isHovered = true;
//     });
  
//     skillsSlideshow.addEventListener('mouseleave', () => {
//         isHovered = false;
//     });
// });
