
function patientLogin(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Please fill in all required fields.");
    return;
  }
  alert("Login successful");

  //  localStorage.setItem("userType", userType);
   window.location.href = "HTML/patient/patientAppointment.html";
      
}