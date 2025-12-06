document.addEventListener('DOMContentLoaded', () => {
    console.log("Games.js loaded"); // Debugging

    // Theme Toggle (Shared Logic) ---
    const themeButton = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            body.classList.toggle('light-mode');
        });
    }

    //  Search and Filter Logic ---
    const searchInput = document.getElementById('search-input');
    const genreFilter = document.getElementById('genre-filter');
    const gameCards = document.querySelectorAll('.game-card');

    function filterGames() {
        if (!searchInput || !genreFilter) {
            console.error("Search elements not found! Check your HTML.");
            return; 
        }

        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedGenre = genreFilter.value.toLowerCase();

        console.log(`Filtering: "${searchTerm}" in Genre: "${selectedGenre}"`); 

        gameCards.forEach(card => {
            const titleElement = card.querySelector('.gamecard');
            const genreElement = card.querySelector('.genre');

            if (!titleElement || !genreElement) {
                console.warn("Skipping malformed card:", card);
                return; 
            }

            const title = titleElement.textContent.toLowerCase();
            const genre = genreElement.textContent.toLowerCase();

            
            const matchesSearch = title.includes(searchTerm);

            
            const matchesGenre = selectedGenre === 'all' || genre.includes(selectedGenre);

            
            if (matchesSearch && matchesGenre) {
                card.style.display = ""; 
            } else {
            }
        });
    }

    
    if (searchInput) {
        searchInput.addEventListener('input', filterGames);
        console.log("Search input listener attached"); 
    } else {
        console.error("Error: Element #search-input not found in HTML. Please add the input tag.");
    }

    if (genreFilter) {
        genreFilter.addEventListener('change', filterGames);
    }

    //  Dynamic Details Button ---
    const detailButtons = document.querySelectorAll('.viewdetails');

    detailButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.parentElement;
            const titleElement = card.querySelector('.gamecard');
            const genreElement = card.querySelector('.genre');

            if (titleElement && genreElement) {
                const title = titleElement.textContent;
                const genre = genreElement.textContent;
                alert(`Game: ${title}\nCategory: ${genre}\n\nLoading game assets...`);
            }
        });
    });
});