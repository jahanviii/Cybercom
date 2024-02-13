const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("click", (event) => {
  
  event.preventDefault();
  
  const userName = document.getElementById("user-name").value;

  const firstName = document.getElementById("first-name").value;
  const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const lastName = document.getElementById("last-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const address = document.getElementById("address").value;
  const userType = document.querySelector('input[name="user-type"]:checked').value;

  const patientData = {
    // id:Math.random().toString(),
    userName,
    firstName,
    dob,
    password,
    phoneNumber,
    address,
   userType
    };
    // alert("Registration successful!");

  localStorage.setItem("patientData", JSON.stringify(patientData));

  if (userType === "patient") {
    window.location.href = "bookAppointment.html";
  } else {
    window.location.href = "doctorAppointment.html";
  }
  registrationForm.reset();
}
);