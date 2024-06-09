// JavaScript code to handle form submission
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(form);
        // You can handle form data submission here, such as sending it to a server
        console.log(formData);
        alert('Form submitted!');
        form.reset(); // Clear the form after submission
    });
});