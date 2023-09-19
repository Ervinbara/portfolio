document.addEventListener('DOMContentLoaded', function() {
    const typedTextElement = document.querySelector('.typed-text');
    const text = "薔薇恵凜";
    let index = 0;

    function type() {
        typedTextElement.textContent += text[index];
        index++;

        if (index < text.length) {
            setTimeout(type, 200);
        } else {
            const kanjiElement = document.querySelector('.kanji');
            const horizontalElement = document.querySelector('.horizontal');

            // Ajout de l'effet de désintégration du texte en japonais
            const disintegrateKanji = setInterval(() => {
                if (typedTextElement.textContent.length > 0) {
                    typedTextElement.textContent = typedTextElement.textContent.slice(0, -1);
                } else {
                    clearInterval(disintegrateKanji);

                    setTimeout(() => {
                        kanjiElement.style.opacity = '0';
                        setTimeout(() => {
                            kanjiElement.style.display = 'none';
                            horizontalElement.style.opacity = '1';

                            // Maintenant, commencez l'effet d'écriture pour le texte horizontal
                            const textHorizontal = "BARA ERVIN";
                            let indexHorizontal = 0;

                            function typeHorizontal() {
                                horizontalElement.textContent += textHorizontal[indexHorizontal];
                                indexHorizontal++;

                                if (indexHorizontal < textHorizontal.length) {
                                    setTimeout(typeHorizontal, 150);
                                }
                            }

                            typeHorizontal();

                        }, 1000);
                    }, 500);
                }
            }, 100);
        }
    }

    type();
});
