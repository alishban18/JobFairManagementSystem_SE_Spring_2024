document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var studentID = document.getElementById("studentID").value;

        // Validate form data (just checking if fields are not empty)
        if (name.trim() === '' || email.trim() === '' || studentID.trim() === '') {
            alert("Please fill out all fields.");
            return;
        }

        // Show success message
        var successMessage = document.createElement("div");
        successMessage.textContent = "Congratulations! You have been registered successfully";
        successMessage.classList.add("success-message");
        document.getElementById("registrationForm").appendChild(successMessage);

        // Reset the form after successful registration
        document.getElementById("registrationForm").reset();

        // Remove success message after 3 seconds
        setTimeout(function() {
            successMessage.remove();
        }, 3000);
    });
});
