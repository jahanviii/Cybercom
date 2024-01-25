const obj1={
  adress:"sunshine park"
};
const obj2={
  name:"akash",
  age:24
};

// spread operator
const obj3={...obj1,...obj2};
console.log(obj3)

// const obj3 =Object.assign({},obj1, obj2);
// console.log(obj3);
