document.addEventListener('DOMContentLoaded', function() {
  var eventForm = document.getElementById('eventForm');

  eventForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var company = document.getElementById('company').value.trim();
    var speaker = document.getElementById('speaker').value.trim();
    var workshop = document.getElementById('workshop').value.trim();
    var session = document.getElementById('session').value.trim();
    var image = document.getElementById('image').files[0];

    // Perform basic validation
    if (!company || !speaker || !workshop || !session || !image) {
      alert('Please fill in all fields and upload an image.');
      return;
    }

    // You can perform additional validation here if needed

    // Prepare form data
    var formData = new FormData();
    formData.append('company', company);
    formData.append('speaker', speaker);
    formData.append('workshop', workshop);
    formData.append('session', session);
    formData.append('image', image);  
    
  });
});
