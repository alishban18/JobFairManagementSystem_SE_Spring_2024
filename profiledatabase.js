document.addEventListener("DOMContentLoaded", function() {
    // Get references to HTML elements
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const filterBtn = document.getElementById("filterBtn");
    const profileList = document.getElementById("profileList");
    
    // Function to handle search
    function searchProfiles() {
        const searchTerm = searchInput.value.toLowerCase();
        // Your search logic here
        // Example: You might fetch data from a server based on the search term
        // and then update the profileList with the search results
    }
    
    // Function to handle filter
    function applyFilters() {
        const majorFilter = document.getElementById("majorFilter").value;
        const yearFilter = document.getElementById("yearFilter").value;
        // Your filter logic here
        // Example: You might fetch data from a server based on the selected filters
        // and then update the profileList with the filtered results
    }
    
    // Event listeners
    searchBtn.addEventListener("click", searchProfiles);
    filterBtn.addEventListener("click", applyFilters);
});
