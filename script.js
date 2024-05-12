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
        }, 1000); // Hide after 1 second of inactivity
    }

    nav.addEventListener('mouseover', showNav);
    nav.addEventListener('mouseout', hideNav);

    // Ensure nav does not hide when using touch devices
    nav.addEventListener('touchstart', showNav);
    document.addEventListener('touchend', hideNav);

    // Page navigation functions
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function() {
            if (button.classList.contains('theme-icon')) {
                // Toggle theme
                document.body.classList.toggle('light-mode');
                document.body.classList.toggle('dark-mode');
            } else {
                // Navigate pages
                const direction = this.innerHTML.includes('25C0') ? -1 : 1; // Determines direction based on the button's content
                changePage(direction);
            }
        });
    });
});

function changePage(direction) {
    const currentPageElement = document.querySelector('p[style*="display: block"]');
    const currentPageNumber = parseInt(currentPageElement.id.split('-')[1]);
    const newPageNumber = currentPageNumber + direction;
    const newPageElement = document.getElementById(`page-${newPageNumber}`);

    if (newPageElement) {
        currentPageElement.style.display = 'none';
        newPageElement.style.display = 'block';
        document.getElementById("current-page").textContent = newPageNumber;
    }
}
