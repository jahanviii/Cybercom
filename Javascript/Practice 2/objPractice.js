//check prop of object
const prop=Object.getOwnPropertyDescriptor(Math,"PI");
// Object.defineProperty(obj,"age",{
//   writable:true
//configurable:false(we can not override it)
// enumerable:false{cant loop}
// })
//symbol
const sym=Symbol('j')//use as symbol
//in obj set as [] 
//iterate through object
const obj={
  name:"k",
  age:10,
  welcomeMsg:function(){
    console.log(obj["age"])
    //key values with "" cant access using .
  }
};
//by default obj not iterable
//use obj.entries() to get both key and value
for(let [key,value] of Object.entries(obj)){
 if(typeof value!== 'function'){
  console.log(`${key}:${value}`);
 }
}
//for only keys
console.log(Object.keys(obj));
//for values use values()