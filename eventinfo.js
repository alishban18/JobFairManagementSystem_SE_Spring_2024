document.addEventListener("DOMContentLoaded", function() {
    // Get all participating company list items
    var companyItems = document.querySelectorAll("#participating-companies li");

    // Loop through each company item
    companyItems.forEach(function(item) {
        // Add click event listener to each item
        item.addEventListener("click", function() {
            // Display an alert with the company name
            alert("You clicked on: " + item.textContent);
        });
    });
});
