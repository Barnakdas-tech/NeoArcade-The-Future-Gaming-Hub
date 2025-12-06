document.addEventListener('DOMContentLoaded', () => {
    console.log("About.js loaded");

    // THEME TOGGLE 
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            console.log("Theme toggled on About page");
        });
    }

    // SCROLL ANIMATIONS 
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observerOptions = {
        threshold: 0.2, 
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    timelineItems.forEach(item => {
        observer.observe(item);
    });
});