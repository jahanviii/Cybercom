// const form=document.getElementById('validationForm').addEventListener("submit",(event)=>{
//   event.preventDefault();});
  // document.getElementById('validationForm').addEventListener("submit",(event)=>{
  function validate(){
  const email=document.getElementById('email').value;
  const password=document.getElementById('password').value;

 

  const regEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
  
  
  if(email==""|| !regEmail.test(email)){
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
  
  window.location.href="Dashboard/index.html";
  
  return true;
 
}