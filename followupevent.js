document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // You can customize this part to handle form submission as needed
        // For now, let's just show a success message
        message.textContent = 'Feedback submitted successfully!';
        message.style.color = 'green';
        form.reset(); // Reset the form fields
    });
});
