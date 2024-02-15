//  const registrationForm = document.getElementById("registration-form");

// registrationForm.addEventListener("submit", () => {
  
 function patientRegister(){  

  const userName = document.getElementById("user-name").value;

  const firstName = document.getElementById("first-name").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const lastName = document.getElementById("last-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const address = document.getElementById("address").value;

  const patientData = {
    //id:Math.random().toString(),
    firstName,
    userName,
    dob,
    password,
    phoneNumber,
    address,
    };
    alert("Registration successful!");

  localStorage.setItem("patientData", JSON.stringify(patientData));

  { 
  window.location.href ="./patientLogin.html";
  }
  registrationForm.reset();
}

