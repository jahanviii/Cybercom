// async function getData(){
//  try{
//   const response= 
//  await fetch('https://jsonplaceholder.typicode.com/users')
 //json convert take time
//  const result=await response.json();
//  console.log(result);
//  }catch(error){
//   console.log(error);
//  }
// }
// getData()
//then catch
//fetch returns promise 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
console.log(data);
})
.catch((error)=>{
  console.log(error);
})