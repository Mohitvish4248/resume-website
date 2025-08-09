document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu li a');

    // Hamburger click pe menu toggle karna
    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        toggleButton.classList.toggle('active');
    });

    // Har menu link pe click hone pe menu band karna
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            toggleButton.classList.remove('active');
        });
    });
});