function submitForm() {
    var form = document.getElementById('contactForm');

    // Simple form validation
    if (form.checkValidity()) {
        // You can add AJAX code here to submit the form data to a server

        // For this example, just display a confirmation message
        alert('Message sent successfully! We will get back to you soon.');

        // Reset the form
        form.reset();
    } else {
        // If the form is not valid, trigger HTML5 validation messages
        form.reportValidity();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('active');

        navLinks.classList.toggle('active');
    });
});

