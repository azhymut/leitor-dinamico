let currentPage = 97;

function changePage(step) {
    const prevPage = document.getElementById(`page-${currentPage}`);
    currentPage += step;
    const nextPage = document.getElementById(`page-${currentPage}`);
    const currentPageDisplay = document.getElementById("current-page");
    if (prevPage) prevPage.style.display = 'none';
    if (nextPage) {
        nextPage.style.display = 'block';
        currentPageDisplay.textContent = currentPage;
    } else {
        currentPage -= step;
    }
}

function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
        themeIcon.innerHTML = '&#x1F4A1;';
    } else {
        body.classList.replace("light-mode", "dark-mode");
        themeIcon.innerHTML = '&#x1F4A1;';
    }
}

document.getElementById(`page-${currentPage}`).style.display = 'block';
