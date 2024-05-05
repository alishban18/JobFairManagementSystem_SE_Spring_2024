document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedback-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Fetch form data
        const formData = new FormData(form);
        const feedbackData = {};

        // Convert FormData to JSON
        formData.forEach(function(value, key) {
            feedbackData[key] = value;
        });

        // You can do additional validation here if needed

        // Now you can do something with the form data, like send it to a server
        sendDataToServer(feedbackData);
    });

    function sendDataToServer(data) {
        // Here you can send the data to a server using AJAX, fetch API, or any other method
        // For demonstration purposes, let's just log the data to the console
        console.log("Form Data:", data);
    }
});
