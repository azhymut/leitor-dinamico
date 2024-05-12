document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navigation');
    let hideTimer;

    // Function to make navigation visible
    function makeNavVisible() {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        clearTimeout(hideTimer); // Clear any existing timeout
    }

    // Function to hide navigation after a delay
    function scheduleHideNav() {
        hideTimer = setTimeout(() => {
            nav.style.opacity = '0';
            nav.style.visibility = 'hidden';
        }, 1000); // Hide after 1 second of inactivity
    }

    // Show navigation when any mouse movement is detected
    document.addEventListener('mousemove', function() {
        makeNavVisible();
        scheduleHideNav();
    });

    // Ensure navigation visibility on touch devices
    document.addEventListener('touchstart', makeNavVisible);
    document.addEventListener('touchend', scheduleHideNav);

    // Function to change the page
    function changePage(direction) {
        const currentPageElement = document.querySelector('p[style="display: block;"]');
        const currentPageNumber = parseInt(currentPageElement.id.split('-')[1]);
        const newPageNumber = currentPageNumber + direction;
        const newPageElement = document.getElementById(`page-${newPageNumber}`);

        if (newPageElement) {
            currentPageElement.style.display = 'none';
            newPageElement.style.display = 'block';
            document.getElementById('current-page').textContent = newPageNumber;
        }
    }

    // Event listeners for page navigation buttons
    const prevButton = document.querySelector('button[onclick="changePage(-1)"]');
    const nextButton = document.querySelector('button[onclick="changePage(1)"]');

    prevButton.addEventListener('click', function() {
        changePage(-1);
    });

    nextButton.addEventListener('click', function() {
        changePage(1);
    });
});
