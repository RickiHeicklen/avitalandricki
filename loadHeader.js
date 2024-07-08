// loadHeader.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            const headerNav = document.getElementById('header-nav');
            headerNav.innerHTML = html;
            setActiveLink(); // Call the function to set the active link
        })
        .catch(err => console.error('Failed to load header:', err));
});

function setActiveLink() {
    const currentPath = window.location.pathname.split('/').pop(); // Get the current file name
    const links = document.querySelectorAll('#header-nav a'); // Select all anchor tags in the navigation
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active'); // Add 'active' class if the href matches the current path
        }
    });
}