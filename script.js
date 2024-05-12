document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.navigation');
    let hideTimer;

    document.addEventListener('mousemove', function() {
        nav.style.opacity = '1';
        nav.style.visibility = 'visible';
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
            nav.style.opacity = '0';
            nav.style.visibility = 'hidden';
        }, 1000); // Auto-hide after 1 second of inactivity
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(event) {
            const currentId = parseInt(document.querySelector('p[style*="display: block"]').id.split('-')[1], 10);
            let newId = currentId;
            if (event.target.closest('button').innerHTML.includes('25C0')) {
                newId = currentId - 1; // Previous page
            } else if (event.target.closest('button').innerHTML.includes('25B6')) {
                newId = currentId + 1; // Next page
            }
            const newPage = document.getElementById(`page-${newId}`);
            if (newPage) {
                document.querySelector('p[style*="display: block"]').style.display = 'none';
                newPage.style.display = 'block';
                document.getElementById('current-page').textContent = newId;
            }
        });
    });
});
