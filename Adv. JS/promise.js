//prpmise is obj represent async operation n result
//async await or promise
//reduce callback hell
const promiseOne=new 
Promise((resolve,reject)=>{
setTimeout(()=>{
  console.log("task 1");
  resolve()
},4000)
})
promiseOne.then(function(){
  console.log("first promise consumed");
})
//another way of promise
new Promise(function(resolve,reject){
  setTimeout(function(){
  console.log("task 2");
  resolve()
  },2000)
}).then(()=>{
  console.log("second promise consumed");
})
//3rd way
const promiseThree=new Promise((resolve,reject)=>{
  setTimeout(()=>{
     resolve({
      uname:"j",
      id:1
     })
  },1000)
}).then((user)=>{
  console.log(user);
})
//4th way
const promiseFour=new Promise((resolve,reject)=>{
  setTimeout(()=>{
  let error=false;
  if(!error){
    resolve({
      username:"y",pswd:"ok"
    })
  }else{
    reject('error:wrong!!')
  }
  },5000)
})
.then((udata)=>{
  // console.log(udata);
  return udata.username;
  //chaining
})
.then((username)=>{
   console.log(username);
})
.catch((error)=>{
  console.log(error);
}).finally(()=>{
  console.log("finally");
})

//async await way
const promiseFive=new Promise((resolve,reject)=>{
 let error=true;
  if(!error){
  setTimeout(()=>{
resolve({color:"red",year:2023})
 },1000)
 }else{
  reject("404!!error")
 }
})
//issue in catch handle
async function handlePromise(){
  try{
    const response=await promiseFive
    console.log(response);
  }
 catch(error){
  console.log(error);
 }
}
handlePromise()