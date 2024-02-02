
function saveFormData(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
 

  const formData = {
   email,password
    
  };

  const existingData = JSON.parse(localStorage.getItem("adminData"));
if(existingData){
  alert("user already exist");
}else{
  localStorage.setItem("adminData", JSON.stringify(formData));}

}
document.addEventListener("submit",(event)=>{
   event.preventDefault()
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;
  const confirmPassword=document.getElementById('cpasswd').value;
  const regEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

  if (email == "" || !regEmail.test(email)) {
    document.getElementById("emailError").innerHTML =
      "Please Enter Valid Email";
    email.focus();
    return false;
  }
  if (password.length < 6) {
    document.getElementById("pswdError").innerHTML =
      "Password should be atleast 6 character long";
      password.focus();
    return false;
  }
  if(confirmPassword!=password){
    document.getElementById("cpswdError").innerHTML =
    "Password should be match";
    confirmPassword.focus();
  return false;
  }
  
  if(saveFormData()){
    alert("user alerady registerd");
  }
  return true;
  
}
 
);
