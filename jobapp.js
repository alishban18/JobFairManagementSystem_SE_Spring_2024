document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validation criteria
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const resume = document.getElementById('resume').value;
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Perform validation
  if (!name.match(nameRegex)) {
    displayPopup('Please enter a valid name (only letters and spaces allowed).');
    return;
  }

  if (!email.match(emailRegex)) {
    displayPopup('Please enter a valid email address.');
    return;
  }

  if (resume.length === 0) {
    displayPopup('Please upload your resume.');
    return;
  }

  // Simulate form submission
  // In real-world scenario, you would send form data to a server
  // and handle confirmation email sending there
  setTimeout(function() {
    document.getElementById('jobApplicationForm').reset();
    document.getElementById('confirmation').classList.remove('hidden');
  }, 1000);


  
});

function displayPopup(message) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.style.display = 'block';
  
  setTimeout(function() {
    popup.style.display = 'none';
  }, 3000);
}
