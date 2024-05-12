document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navigation');

    function toggleNavVisibility() {
        if (nav.style.opacity === '0' || nav.style.opacity === '') {
            nav.style.opacity = '1';
            nav.style.visibility = 'visible';
        } else {
            nav.style.opacity = '0';
            nav.style.visibility = 'hidden';
        }
    }

    function changePage(direction) {
        const currentPageNumber = parseInt(document.getElementById("current-page").textContent, 10);
        const newPageNumber = currentPageNumber + direction;
        const newPageElement = document.getElementById(`page-${newPageNumber}`);

        if (newPageElement) {
            document.querySelector('p[style*="display: block"]').style.display = 'none';
            newPageElement.style.display = 'block';
            document.getElementById("current-page").textContent = newPageNumber;
        }
    }

    document.querySelectorAll('.navigation button').forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('theme-icon')) {
                document.body.classList.toggle('light-mode');
                document.body.classList.toggle('dark-mode');
            } else {
                const direction = this.innerText.includes('C0') ? -1 : 1;
                changePage(direction);
            }
        });
    });

    document.addEventListener('mouseover', toggleNavVisibility);
    document.addEventListener('mouseout', toggleNavVisibility);
});
