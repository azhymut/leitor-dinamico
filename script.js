let currentPage = 97; // Starting with page 97

function changePage(step) {
    const prevPage = document.getElementById(`page-${currentPage}`);
    currentPage += step;
    const nextPage = document.getElementById(`page-${currentPage}`);
    if (prevPage) prevPage.style.display = 'none';
    if (nextPage) {
        nextPage.style.display = 'block';
    } else {
        currentPage -= step; // Revert change if no next/prev page
    }
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
    } else {
        body.classList.replace("light-mode", "dark-mode");
    }
}

document.getElementById(`page-${currentPage}`).style.display = 'block'; // Show initial page
