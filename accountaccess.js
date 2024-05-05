// Script for form submission handling
document.getElementById('userActionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var action = document.getElementById('action').value;
    if (action === 'add') {
        // Handle adding user account
        document.getElementById('message').innerText = 'User account added successfully.';
    } else if (action === 'edit') {
        // Handle editing user account details
        document.getElementById('message').innerText = 'User account details updated successfully.';
    } else if (action === 'remove') {
        // Handle removing user account
        document.getElementById('message').innerText = 'User account removed successfully.';
    }
});

document.getElementById('action').addEventListener('change', function() {
    var action = this.value;
    document.getElementById('addUserFields').style.display = 'none';
    document.getElementById('editUserFields').style.display = 'none';
    document.getElementById('removeUserFields').style.display = 'none';
    if (action === 'add') {
        document.getElementById('addUserFields').style.display = 'block';
    } else if (action === 'edit') {
        document.getElementById('editUserFields').style.display = 'block';
    } else if (action === 'remove') {
        document.getElementById('removeUserFields').style.display = 'block';
    }
});
