function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var university = document.getElementById('university').value;
  var operation = document.getElementById('operation').value;

  if (name.trim() == '' || email.trim() == '' || university.trim() == '') {
    alert('Please fill in all fields');
    return false;
  }

  if (operation !== 'backup' && operation !== 'recovery') {
    alert('Please select Backup or Recovery operation');
    return false;
  }

  return true;
}
