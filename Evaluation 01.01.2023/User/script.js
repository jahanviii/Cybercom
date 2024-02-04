// add data to localstorage
function addData() {
  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let bday = document.getElementById("bday").value;


  let age = calculateAge(bday);

//store into object
  let dataObject = { 
    name: name,
     email: email,
     password: password, 
     birthday: bday
    };

  // Get existing data from localStorage 
  let existingData = JSON.parse(localStorage.getItem("userData")) || [];

  // Add the new data to the array
  existingData.push(dataObject);

  // Save the updated array back to localStorage
  localStorage.setItem("userData", JSON.stringify(existingData));

  // Update the table
  updateTable();
}

function calculateAge(birthdate) {
  let today = new Date();
  let birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
//show data in table
// Function to update the table with data from localStorage
function updateTable() {
  // Get the table body element
  let tableBody = document.getElementById("userList");

  // Clear the table body
  tableBody.innerHTML = ""

  // Get data from localStorage
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  // Loop through the data and add rows to the table
  userData.forEach(function (element, index) {
    let row = tableBody.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = element.name;
    cell2.innerHTML = element.email;
    cell3.innerHTML = element.password;
    cell4.innerHTML = element.birthday;
    cell5.innerHTML = element.age;

    cell6.innerHTML = '<button class="btn btn-warning" onclick="editData(' + index + ')">Edit</button> ' +
                      '<button class="btn btn-danger" onclick="deleteData(' + index + ')">Delete</button>';
  });
  document.getElementById("dataForm").reset();
}
function deleteData(index) {
  //  from localStorage
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  // Delete the selected data from localStorage
  userData.splice(index, 1);
  localStorage.setItem("userData", JSON.stringify(userData));

  // Update the table
  updateTable();
}



function editData(index) {
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  
}










