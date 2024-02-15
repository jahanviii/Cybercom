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
//get data
function getData(){
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
}
//create data(put)

async function putData() {
  const data = {
      id: 1245,
      name: "yashvi",
      age: 19
  };

  try {
      const response = await fetch('https://reqres.in/api/users', {
          method: "POST",
          body: JSON.stringify(data)
      });

      if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
      } else {
          console.log('Error:', response.status);
      }
  } catch (error) {
      console.error('Error:', error);
  }
}

//updtae data
function updateData() {
  fetch('https://reqres.in/api/users/1245', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1245,
      name: 'yashvi',
      age: 9
    })
  })
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .then(data => {
    console.log('Data updated successfully:', data);
  })
  .catch(error => {
    console.error('Error updating data:', error);
  });
}

//delete
function deleteData(){
  fetch('https://reqres.in/api/users/3',{
    method:'DELETE'
  })
  .then((response)=>console.log('deleted'))
  
  .catch((error)=>console.log(error))
}