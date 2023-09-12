function triggerAnimation(elements, animationClass) {
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add(animationClass);
        }
    });
}

const contentElements = document.querySelectorAll('.content');
const timeElements = document.querySelectorAll('.time');

window.addEventListener('scroll', () => {
    triggerAnimation(contentElements, 'active');
    triggerAnimation(timeElements, 'active');
});


