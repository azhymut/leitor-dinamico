let navVisible = false;
const nav = document.querySelector('.navigation');

document.addEventListener('touchstart', () => {
    nav.style.opacity = '1';
    nav.style.visibility = 'visible';
    navVisible = true;
});

document.addEventListener('touchend', () => {
    setTimeout(() => {
        if (navVisible) {
            nav.style.opacity = '0';
            nav.style.visibility = 'hidden';
            navVisible = false;
        }
    }, 3000); // Adjust timing as needed
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("light-mode");
    body.classList.toggle("dark-mode");
}

function changePage(direction) {
    const currentPageElement = document.querySelector('p[style*="display: block"]');
    let newPageId = parseInt(currentPageElement.id.split('-')[1]) + direction;
    const newPageElement = document.getElementById(`page-${newPageId}`);
    if (newPageElement) {
        currentPageElement.style.display = 'none';
        newPageElement.style.display = 'block';
        document.getElementById('current-page').textContent = newPageId;
    }
}
