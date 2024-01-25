function calculateBMI(){
  let height=document.getElementById('height').value;
  let weight=document.getElementById('weight').value;
  let result=document.getElementById('result');
  
  if (isNaN(height) || height<=0) {
    document.getElementById("heightError").innerHTML =
      "Please enter valid height"; 
  }
  else if (isNaN(weight) || weight<=0) {
    document.getElementById("weightError").innerHTML =
      "Please enter valid height"; 
  }
  else{
    let bmi = [weight/ height/ height]*1000;
    if (bmi < 18.5) {
      result.innerHTML =`Underweight`;
    }
        else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerHTML = `Normal weight`;
        }
        else if(bmi>=25 && bmi<29.9){
        result.innerHTML =`Overweight`;
        }else {
          result.innerHTML =`Obesity`;
      }
    document.getElementById('bmi').innerHTML=
    `Your BMI is: ${bmi}`;
      }
  }

