//store data in key value pair into web browser 
//session(only for session;lost when tab close;larger capcity hold)
//local storage(not clear itself;highest capacity)
//store user specific data on local storage
//fetching data from lstorage faster,optimize web app
//both follow same origin policy
//origin(protocol(http/s)+host(localhost/ggl)+port)

//setting data in ls in key value pair
localStorage.setItem("name","j")
localStorage.getItem("objname")
 localStorage.removeItem("name")
 localStorage.clear()
//localStorage only accepts string 
const obj={
  name:"j",
  age:10,
  id:Date.now()
}

localStorage.setItem("obj-convert",JSON.stringify(obj))
console.log(JSON.parse(localStorage.getItem('obj-convert')))
//form 
const button=document.getElementById('btn')
const uname=document.getElementById('name')
const body=document.querySelector('body')
button.addEventListener('click',()=>{
  const nameValue=uname.val;
  //set value as name(key)
  localStorage.setItem('name',nameValue);
  location.reload();
})
document.addEventListener('load',()=>{
  const value=JSON.parse(localStorage.getItem('nameValue'))
  body.innerText=value;
})