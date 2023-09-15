document.addEventListener('DOMContentLoaded', function() {
    // Effet d'écriture pour l'introduction
    const introText = document.querySelector('.intro');
    const text = "Fullstack Developer";
    let index = 0;
  
    function type() {
      introText.textContent += text[index];
      index++;
  
      if (index < text.length) {
        setTimeout(type, 100);
      }
    }
  
    type();
  
    // Menu hamburger
    const hamburger = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.menu ul');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });
  