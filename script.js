document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navigation');
    let timer;

    function showNav() {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        clearTimeout(timer); // Clear the timer if it's set
    }

    function hideNav() {
        timer = setTimeout(() => {
            nav.style.opacity = '0';
            nav.style.visibility = 'hidden';
        }, 1500); // Reduced time to 1500 milliseconds
    }

    // Show nav on mouseover and hide on mouseout
    nav.addEventListener('mouseover', showNav);
    nav.addEventListener('mouseout', hideNav);

    // For touch devices
    document.addEventListener('touchstart', showNav, false);
    document.addEventListener('touchend', hideNav, false);
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
