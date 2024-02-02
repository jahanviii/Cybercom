


function showData(){
  let localData=localStorage.getItem("users");
  let tableData=localData?JSON.parse(localData):[];
 
  const tableRows=document.getElementById('userList');
  tableData.forEach(element => {
    tableRows += `<tr>
          <td>${element.name}</td>
          <td>${element.email}</td>
          <td>${element.password}</td>
          <td>${element.date}</td>
          
          <td>
            <button onclick=loadRecordToField('${element.id}')>Edit</button>
            <button onclick=deleteRecord('${element.id}')>Delete</button>              
          </td>
          </tr>
        `;
  });
 tableRows.append(tableRows);
}


function addData(){
  const userName=document.getElementById("userName").value;
  const userEmail=document.getElementById('userEmail').value;
  const userPassword=document.getElementById('userPassword').value;
  const userBday=document.getElementById('userBday').value;
  
  let localData=localStorage.getItem("users");
let tableData=localData?JSON.parse(localData):[];

if(tableData==null && tableData.length>0){
  tableData=[
    ...tableData,{
      id:Date.now(),
      userName:userName,
      userEmail:userEmail,
      userPassword:userPassword,
      userBday:userBday,
    },
  ];
  localStorage.setItem('users',JSON.stringify(tableData));
}else{
tableData=[
  {
  userName:userName,
  userEmail:userEmail,
  userPassword:userPassword,
  userBday:userBday,
}];
}
localStorage.setItem('users',JSON.stringify(tableData));
showData();
};
