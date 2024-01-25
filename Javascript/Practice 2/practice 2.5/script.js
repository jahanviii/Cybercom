const obj1={
  adress:"sunshine park"
};
const obj2={
  name:"akash",
  age:24
};
function mergeObjects(obj1,obj2){
  let result={};
  for(let key in obj1){
    result[key]=obj1[key];
  }
  for(let key in obj2){
    result[key]=obj2[key];
  }
  return result;
}
let obj3=mergeObjects(obj1,obj2);
console.log(obj3);

// spread operator
// const obj3={...obj1,...obj2};
// console.log(obj3)

//assign method
// const obj3 =Object.assign({},obj1, obj2);
// console.log(obj3);
