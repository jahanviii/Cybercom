// const registrationForm = document.getElementById("registration-form");
// const registrationForm=document.getElementById('registration-form');
// registrationForm.addEventListener("submit", (event) => {
function docRegister(){
  // event.preventDefault();
  
  const userName = document.getElementById("user-name").value;

  const firstName = document.getElementById("first-name").value;
  // const dob = document.getElementById("dob").value;
  const password = document.getElementById("password").value;
  const lastName = document.getElementById("last-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const address = document.getElementById("address").value;
  const speciality = document.getElementById("speciality").value;

  // const userType = document.querySelector('input[name="user-type"]:checked').value;

  const doctorData = {
    // id:Math.random().toString(),
    
    firstName,
    userName,
    lastName,
    // dob,
    password,
    speciality,
    phoneNumber,
    address,
  //  userType
  };
   alert("Registration successful!");

  localStorage.setItem("doctorData", JSON.stringify(doctorData));
  window.location.href = "doctorAppointment.html";

  // if (userType === "patient") {
  //   window.location.href = "bookAppointment.html";
  // } else {
  //   window.location.href = "doctorAppointment.html";
  // }
  registrationForm.reset();
}
//for login
document.getElementById("login-form").addEventListener("submit", function() {
  // event.preventDefault();
  // window.history.forward();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  // const userType = document.getElementById("user-type").value;

  if (!username || !password ) {
    alert("Please fill in all required fields.");
    return;
  }
  alert('login sucess')
  window.location.href = "doctorAppointment.html";

  //  localStorage.setItem("userType", userType);
  // if (userType === "patient") {
  //        window.location.href = "bookAppointment.html";
  //      } else {
  //        window.location.href = "doctorAppointment.html";
  //     }
});