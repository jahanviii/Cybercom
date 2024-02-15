//xml:object to make http reqs
//API:clent->api<-server
//ajax(only reload required)
//get request
const url = 'https://reqres.in/api/products/3';
const xhr = new XMLHttpRequest();
function getXml(){
xhr.open('GET', url,true);
xhr.onload = () => {
  if (xhr.status === 200) {
    console.log(xhr.responseText);
  } else {
    console.error(`Error ${xhr.status}: ${xhr.statusText}`);
  }
};
xhr.send();}
//post request
function postXml(){
  xhr.open('POST', 'https://reqres.in/api/users',true);
  let userData = {
    name: 'Janhvi',
    age:21 
  };
  // let user=JSON.stringify(userData);
  xhr.onload = function() {
    if (xhr.status === 201) {
      let response = xhr.responseText;
  
      console.log('New user created:', response);
    } else {
      console.error('Request failed. Status:', xhr.status);
    }
  };
 xhr.send(userData)
}
//put(update)
function putXml(){
let userId = 121; 
let url = 'https://reqres.in/api/users/' + userId;

let updatedData = {
  name: 'Janhvi Bhatt',
};

var jsonData = JSON.stringify(updatedData);
xhr.open('PUT', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log('User updated:', response);
  } else {
    console.error('Request failed. Status:', xhr.status);
  }
};
xhr.send(jsonData);
}
//delete
function deleteXml(){
  let userId = 3; 
let url = 'https://reqres.in/api/users/' + userId;
xhr.open("DELETE",url,true);
xhr.onload=()=>{
  if(xhr.status===204){
    console.log('User deleted successfully');
  }
  else {
    console.error('Request failed. Status:', xhr.status);
  }
  xhr.send();
}
}
