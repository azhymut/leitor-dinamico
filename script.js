document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navigation');
    let timer;

    document.addEventListener('touchstart', () => {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        clearTimeout(timer);
    });

    document.addEventListener('touchend', () => {
        timer = setTimeout(() => {
            nav.style.opacity = '0';
            nav.style.visibility = 'hidden';
        }, 2000); // Hide after 2 seconds of no interaction
    });

    const themeButton = document.querySelector('.navigation button:first-child');
    const prevButton = document.querySelector('.navigation button:nth-child(2)');
    const nextButton = document.querySelector('.navigation button:nth-child(3)');
    const currentPageElement = document.getElementById("current-page");

    themeButton.addEventListener('click', () => {
        document.body.classList.toggle("light-mode");
        document.body.classList.toggle("dark-mode");
    });

    function changePage(direction) {
        let currentPageNumber = parseInt(currentPageElement.textContent);
        let newPageNumber = currentPageNumber + direction;
        let currentPage = document.getElementById(`page-${currentPageNumber}`);
        let newPage = document.getElementById(`page-${newPageNumber}`);

        if (newPage) {
            currentPage.style.display = 'none';
            newPage.style.display = 'block';
            currentPageElement.textContent = newPageNumber;
        }
    }

    prevButton.addEventListener('click', () => changePage(-1));
    nextButton.addEventListener('click', () => changePage(1));
});
