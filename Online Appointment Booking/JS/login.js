
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // window.history.forward();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const userType = document.getElementById("user-type").value;

  if (!username || !password || !userType) {
    alert("Please fill in all required fields.");
    return;
  }

  //  localStorage.setItem("userType", userType);
  if (userType === "patient") {
         window.location.href = "bookAppointment.html";
       } else {
         window.location.href = "doctorAppointment.html";
      }
});