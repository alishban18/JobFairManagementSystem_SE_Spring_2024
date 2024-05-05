// job_fair_integration.js

// Function to handle button click event
function redirectToCareerServices() {
  // Get the URL of the career services platform from the link
  var careerServicesUrl = document.querySelector('.btn').getAttribute('href');
  
  // Open the career services platform in a new tab
  window.open(careerServicesUrl, '_blank');
}

// Add event listener to the button
document.querySelector('.btn').addEventListener('click', redirectToCareerServices);
