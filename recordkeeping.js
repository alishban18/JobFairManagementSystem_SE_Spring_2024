document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    function handleFormSubmission(event) {
        event.preventDefault();
        
        var studentName = document.getElementById('studentName').value;
        var interviewDate = document.getElementById('interviewDate').value;
        var selectionStatus = document.getElementById('selectionStatus').value;
        var interviewResult = document.getElementById('interviewResult').value;

        // Here you can handle the submission of the form data, like saving it to a database
        // For now, let's just display a success message
        document.getElementById('message').innerText = 'Record saved successfully.';
    }

    // Add event listener to form submission
    document.getElementById('recordForm').addEventListener('submit', handleFormSubmission);
});
