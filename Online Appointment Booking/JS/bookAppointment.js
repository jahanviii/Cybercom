const bookAppointmentForm = document.getElementById('book-appointment-form');
const doctorSelect = document.getElementById('doctor');
const dateInput = document.getElementById('date');

document.getElementById('book-appointment-form');
bookAppointmentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  window.history.forward()
  if (new Date(dateInput.value) < new Date()) {
    alert('Please select a date in the future.');
    
  }
  if (doctorSelect.value === '') {
    alert('Please select a doctor.');
   
  }
 let appointmentData = JSON.parse(localStorage.getItem('appointmentData'));

   let newAppointment ={
    date: dateInput.value,
    doctor: doctorSelect.value,
    approved:false
   };
  //  adata.push(patient);
  // let appointmentData= Object.assign(adata,patient)
  appointmentData.push(newAppointment)
  // appointmentData=[
  //   ...appointmentData,newAppointment
  // ]

  localStorage.setItem("appointmentData", JSON.stringify(appointmentData));

  // dateInput.value = '';
  // doctorSelect.value = '';
alert('Appointment booked successfully!');  
})

function logout() {
  window.location.href="login.html"  
}

