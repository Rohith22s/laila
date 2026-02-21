// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Add simple click handlers for FAQ items if needed
    const faqHeaders = document.querySelectorAll('.faq-header');
    
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active class on parent item
            const item = header.parentElement;
            item.classList.toggle('active');
            
            // This is just a stub for now. Real implementation will require CSS for .faq-content display.
        });
    });
});
