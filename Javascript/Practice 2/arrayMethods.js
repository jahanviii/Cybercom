 const a=[1,2,3];

//array methods
let stringConvert=a.toString()//convert to string
//add ele to end of array
 a.push(4);
// a.pop();
   //insert at array begin(top) time consuming
a.unshift(0);
a.shift()
console.log(a.includes(2))
//indexOf()

//slice method
const b=[3,2,5,4,7]
const newArray=b.slice(0,3)
//starts from 0 till 2(not include 3)
console.log(newArray);
//no changes in array after slice
console.log(b);
// splice(-1) (last one)
const s=b.splice(1,3)
//include last range also
console.log(s);
//change in array after splice
//removes array ele of splice
console.log(b);

//join method
const title='jefmfn-grfh'
const url=title.split('-').join('').toLowerCase();
console.log(url);

//destructuring
// spread syntax enumerates the properties of an object 
// adds the key-value pairs to the object being created.
//Spread syntax "expands" an array into its elements
//rest syntax collects multiple elements 
//and "condenses" them into a single element
function sum(x, y, z,w) {
  return x + y + z+w;
}

const numbers = [1, 2, 3,4];

console.log(sum(...numbers));
//concate objects
const acar = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const bcar = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}
//prop overwritten by last obj
const myUpdatedVehicle = {...acar, ...bcar}
console.log(myUpdatedVehicle)

// spread operator for copying in 
// this original array is not affected
let arr = ['a', 'b', 'c'];
let arr2 = [...arr];

//map method(inbuilt loop method)
const no=[2,3,4,5];
no.map((array)=>{
console.log(array);
});
//filter(condition) some,every(returns t/f)
const nums=no.filter((item,index,array)=>{
  return item > 2;
});
console.log(nums);
//reduce(prev is 1st ele)
const newNums=no.reduce((prev,item)=>{
  return prev+item;
})
console.log(newNums);
//find()returns particular element||undefined
//spread [...a,...b](merge arr)
//rest 
//concat(no change actual array)
