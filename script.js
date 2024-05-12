document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.querySelector('.navigation button:first-child');
    const prevButton = document.querySelector('.navigation button:nth-child(2)');
    const nextButton = document.querySelector('.navigation button:nth-child(3)');
    const currentPageElement = document.getElementById("current-page");

    function toggleTheme() {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
    }

    function changePage(direction) {
        let currentPage = parseInt(currentPageElement.textContent, 10);
        let newPage = currentPage + direction;
        let newPageElement = document.getElementById(`page-${newPage}`);
        if (newPageElement) {
            document.querySelector('p[style*="display: block"]').style.display = 'none';
            newPageElement.style.display = 'block';
            currentPageElement.textContent = newPage;
        }
    }

    themeButton.addEventListener('click', toggleTheme);
    prevButton.addEventListener('click', () => changePage(-1));
    nextButton.addEventListener('click', () => changePage(1));
});
