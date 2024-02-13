//function that is passed as an argument in another function.
//JavaScript functions are executed in the sequence they are called
//one thing in a time in specific order(t->b)(single threaded sunchronous)

//async await>>>promises>>callback

console.log("1");
console.log("2");
console.log("3");
//built in js aysnc fun(allow run after some sec
//arrow fun)
setTimeout(()=>{
  console.log('hello');

},2000);//2 s
console.log("4");
//callback(calling another fun in one fun)
let displaySum=(a,b,sum)=>{
  sum(a,b);
}
displaySum(2,3,(a,b)=>{
  console.log(a+b);
})
//callback hell
//nested callbacks
//1st data1
//then data2 data3 
function getData(dataId,getNextData){
 setTimeout(()=>{
  console.log(dataId);
  if(getNextData){
    getNextData();
 }},2000)
}
getData(1,()=>{
  console.log("getting data 2");
  getData(2,()=>{
    console.log("getting data 3");
    getData(3);
  })
});
//promises(solves callback hell problem)
//pending fulfill reject
function getNumber(noId,nextNo) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("no:",noId);
      resolve("success")
      if(nextNo){
        nextNo()
      }
    },2000)
  });
}
//api:use async(run parallel)
//always return promise
async function hello(){
  console.log("hi");
}
 //await pause execution of surrounding async fun 
 function api() {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data");
    resolve(200)
    },2000)
  })
 }
 async function getApi(){
  await api()
 }