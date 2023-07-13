import "./styles.css";


function clickEmpty() {
  var tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Remove all rows from the table
}

function clickSubmit(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var name = document.getElementById('input-username').value;
  var email = document.getElementById('input-email').value;
  var address = document.getElementById('input-address').value;
  var admin = document.getElementById('input-admin').value;

  // Create a new row with the input data
  var newRow = document.createElement('tr');
  newRow.innerHTML = '<td>' + name + '</td>' +
                     '<td>' + email + '</td>' +
                     '<td>' + address + '</td>' +
                     '<td>' + admin + '</td>';

  // Append the new row to the table
  var tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
  tableBody.appendChild(newRow);

  // Reset the form
  document.getElementById('input-username').value = '';
  document.getElementById('input-email').value = '';
  document.getElementById('input-address').value = '';
  document.getElementById('input-admin').value = '';
}

function clearTable() {
  var tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Remove all rows from the table
    
}