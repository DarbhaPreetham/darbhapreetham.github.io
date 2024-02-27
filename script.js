document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const smoothScrollLink of smoothScrollLinks) {
        smoothScrollLink.addEventListener('click', smoothScroll);
    }
 
    // Function for smooth scrolling
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const yOffset = -80; // Adjust this value to offset the scroll position
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
 
    // Add any additional modern JavaScript functionalities here
 });
 