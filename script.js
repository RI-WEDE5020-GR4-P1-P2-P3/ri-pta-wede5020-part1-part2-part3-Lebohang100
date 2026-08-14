document.addEventListener('DOMContentLoaded', function() {
    console.log('Cotlands website loaded successfully!');

    // Add basic form submission prevention and feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            // Get the form's action or ID for context
            const formId = this.id || 'form';
            alert(`Thank you! Your ${formId} has been submitted. We will get back to you soon.`);
            // Optionally, clear the form
            this.reset();
        });
    });

    // Add a smooth scroll effect for anchor links (if any)
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});