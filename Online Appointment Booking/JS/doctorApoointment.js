const patientData = JSON.parse(localStorage.getItem('patient'));
const dateData=JSON.parse(localStorage.getItem('appointmentData'));
// if  data exists
if (patientData) {
    const patientName = document.createElement('p');
    patientName.textContent = `Patient Name: ${patientData.firstName}`;
    document.body.appendChild(patientName);

    const patientNumber = document.createElement('p');
    patientNumber.textContent = `Patient Number: ${patientData.phoneNumber}`;
    document.body.appendChild(patientNumber);

    const appointmentDate = document.createElement('p');
    appointmentDate.textContent = `Appointment Date: ${dateData.date}`;
    document.body.appendChild(appointmentDate);

   // approval/delete button
    const approvalButton = document.createElement('button');
    approvalButton.textContent = 'Approve / Delete';
    document.body.appendChild(approvalButton);

    approvalButton.addEventListener('click', () => {
    
    });
// } else {
    //  if there's no stored appointment data
    // const noDataMessage = document.createElement('p');
    // noDataMessage.textContent = 'No appointment requests found.';
    // document.body.appendChild(noDataMessage);
}

function logout() {
  window.location.href="login.html"  
}
