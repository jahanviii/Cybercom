function extractValue(obj, requireProperties) {
  const extractedData = {};
  for (const property in obj) {
    if (requireProperties.includes(property)) {
      extractedData[property] = person[property];
    }
  }

  return extractedData;
}
 
const person = {
  name: "Janki",
  age: 10,
  city: "Ahmedabad"
};
const requireProperties=['name','age'];
const result=extractValue(person,requireProperties);
console.log(result);