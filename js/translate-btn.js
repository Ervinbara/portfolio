document.addEventListener('DOMContentLoaded', function() {
    updatePageContent(); 
});

function changeLanguage(lang) {
    const scriptTag = document.getElementById("lang-data");
    const langFile = "../json-langues/" + lang + ".json";
  
    fetch(langFile)
      .then(response => response.json())
      .then(data => {
        langData = data;
        updatePageContent();
      })
      .catch(error => console.error("Error loading language file", error));
  }
  
  function updatePageContent() {
    document.getElementById("about-me-text-link").textContent = langData.aboutMeText;
    document.getElementById("about-me-text2-link").textContent = langData.aboutMeTexte;
    document.getElementById("about-link-section").textContent = langData.aboutMe;
    document.getElementById("titre-text-dv").textContent = langData.titreDv;
    document.getElementById("titre-text-fft").textContent = langData.titreFft;
    document.getElementById("titre-text-li").textContent = langData.titreLi;
    document.getElementById("titre-text-bac").textContent = langData.titreBac;
    document.getElementById("content-text-dv").textContent = langData.contentDv;
    document.getElementById("content-text-fft").textContent = langData.contentFft;
    document.getElementById("content-text-li").textContent = langData.contentLi;
    document.getElementById("content-text-bac").textContent = langData.contentBac;
    document.getElementById("welcome-link").textContent = langData.welcome;
    document.getElementById("projet-btn-link").textContent = langData.projetBtn;
    document.getElementById("home-link").textContent = langData.home;
    document.getElementById("about-link").textContent = langData.about;
    const homeElements = document.querySelectorAll(".home-link");
    homeElements.forEach(element => {
        element.textContent = langData.home;
      });
    const aboutElements = document.querySelectorAll(".about-link");
    aboutElements.forEach(element => {
        element.textContent = langData.about;
      });
    const timelineElements = document.querySelectorAll(".timeline-link");
    timelineElements.forEach(element => {
        element.textContent = langData.timeline;
      });
    const skillsElements = document.querySelectorAll(".skills-link");
    skillsElements.forEach(element => {
        element.textContent = langData.skills;
    });
    const projectsElements = document.querySelectorAll(".projects-link");
    projectsElements.forEach(element => {
        element.textContent = langData.projects;
    });
  }
  
  // Fonction pour basculer l'affichage du menu des options de langues
function toggleLanguageOptions() {
    const languageOptions = document.getElementById("language-options");
    languageOptions.classList.toggle("hidden");
}
// Fonction pour changer la langue en français
function switchToFrench() {
    changeLanguage('fr');
    const selectedLanguage = document.querySelector(".selected-language img");
    selectedLanguage.src = "images/langues/flag-fr.svg";
    toggleLanguageOptions();
    body.classList.remove('en');
    body.classList.add('fr');
}

// Fonction pour changer la langue en anglais
function switchToEnglish() {
    changeLanguage('en');
    const selectedLanguage = document.querySelector(".selected-language img");
    selectedLanguage.src = "images/langues/flag-en.svg";
    toggleLanguageOptions();
    body.classList.remove('fr');
    body.classList.add('en');
}
  