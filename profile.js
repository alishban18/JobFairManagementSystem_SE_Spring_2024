document.getElementById('profileForm').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('errorMessages').innerHTML = '';


  const education = document.getElementById('education').value;
  const skills = document.getElementById('skills').value;
  const experience = document.getElementById('experience').value;

  let isValid = true;
  const errorMessages = [];

  if (!education.trim()) {
    errorMessages.push('Education field cannot be empty.');
    isValid = false;
  }

  if (!skills.trim()) {
    errorMessages.push('Skills field cannot be empty.');
    isValid = false;
  }

  if (!experience.trim()) {
    errorMessages.push('Work Experience field cannot be empty.');
    isValid = false;
  }

  if (!isValid) {
    const errorDiv = document.getElementById('errorMessages');
    errorMessages.forEach(message => {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('error');
      errorMessage.textContent = message;
      errorDiv.appendChild(errorMessage);
    });
    return;
  }

  setTimeout(function() {

    document.getElementById('notification').classList.remove('hidden');

    document.getElementById('profileForm').reset();
  }, 1000);
});
