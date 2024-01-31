function validateForm(){
let title=document.getElementById("productTitle").value
 let price=document.getElementById("productPrice").value
 let description=document.getElementById("description").value
 let category=document.getElementById("categoryList").value

 let titleError = document.getElementById("title_error");
 let priceError = document.getElementById("price_error");
 let descError = document.getElementById("description_error");
 let categoryError=document.getElementById("category_error");

titleError.innerHTML = ""
priceError.innerHTML = "";
descError.innerHTML = "";
categoryError.innerHTML="";

if (title === "") {
    titleError.innerHTML = "Name is required";
    return false;
}
if (price === "" || price<=0) {
    priceError.innerHTML = "enter valid price";
    return false;
}
if (description === "") {
    descError.innerHTML = "Description required";
    return false;
}
if (category === "") {
    categoryError.innerHTML = "Category is required";
    return false;
}

return true;
}