document.addEventListener('DOMContentLoaded', () => {

    // Theme Toggle (Dark/Light Mode) ---
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;

    themeButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        console.log("Theme switched!");
    });

    //  Dynamic Welcome Text (Mouse Events) ---
    const welcomeText = document.getElementById('welcome');
    const futureText = document.getElementById('future');

    function getRandomColor() {
        const colors = ['#FF007F', '#FCEE0A', '#00eaff', '#a020f0', '#ffffff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    welcomeText.addEventListener('mouseover', () => {
        welcomeText.style.color = getRandomColor();
    });

    futureText.addEventListener('mouseover', () => {
        futureText.style.color = getRandomColor();
        futureText.style.textShadow = "0 0 15px " + futureText.style.color;
    });

    welcomeText.addEventListener('mouseout', () => {
        welcomeText.style.color = '#FCEE0A'; 
    });
    
    futureText.addEventListener('mouseout', () => {
        futureText.style.color = '#FF007F'; 
        futureText.style.textShadow = "0 0 5px #FCEE0A";
    });

    //  Game Card Interaction 
    const detailButtons = document.querySelectorAll('.viewdetails');

    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.parentElement;

            const title = card.querySelector('.gamecard').innerText;
            const genre = card.querySelector('.genre').innerText;

            alert(`You selected: ${title}\nGenre: ${genre}\n\n(Dynamic details page loading...)`);
        });
    });

});