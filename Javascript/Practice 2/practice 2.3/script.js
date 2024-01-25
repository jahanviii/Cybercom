const People=[
  {
    name:"sia",
    age:10,
    address:{
      state:"Rajasthan"
    }
  },
  {
    name:"janhvi",
    age:20,
    address:{
      state:"gujarat"
    }
  }
]
for(const people of People){
  console.log("Name:" ,people.name);
  console.log("Age:",people.age);
  console.log("State:",people.address.state);
}