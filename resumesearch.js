document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.querySelector('.search-form button');
    const searchResults = document.querySelector('.search-results');

    searchButton.addEventListener('click', function() {
        const keywords = document.getElementById('keywords').value.toLowerCase();
        const industry = document.getElementById('industry').value.toLowerCase();
        const location = document.getElementById('location').value.toLowerCase();

        // Clear previous search results
        searchResults.innerHTML = '';

        // Loop through candidate profiles and filter based on search criteria
        const candidateProfiles = document.querySelectorAll('.candidate-profile');
        candidateProfiles.forEach(profile => {
            const name = profile.querySelector('h3').textContent.toLowerCase();
            const education = profile.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
            const experience = profile.querySelector('p:nth-of-type(2)').textContent.toLowerCase();

            if (name.includes(keywords) || education.includes(keywords) || experience.includes(keywords)) {
                if (industry === '' || education.includes(industry)) {
                    if (location === '' || experience.includes(location)) {
                        searchResults.appendChild(profile.cloneNode(true));
                    }
                }
            }
        });
    });
});
