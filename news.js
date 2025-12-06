ocument.addEventListener('DOMContentLoaded', () => {
    console.log("News.js loaded");
    // 1. THEME TOGGLE (Consistent across pages)
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            console.log("Theme toggled on News page");
        });
    }

    // 2. DYNAMIC "READ MORE" BUTTONS
    const readMoreButtons = document.querySelectorAll('.button');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.news-card');
            const headline = card.querySelector('h3').innerText;

            alert(`Opening full article: "${headline}"\n\n(Connecting to Cyber-Net...)`);
        });
    });
});