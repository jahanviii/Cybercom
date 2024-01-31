

function saveFormData() {
  window.location.href="productList.html";
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;
  const price = document.getElementById("price").value;

  const formData = {
    title,price,
    description,
    category,
    
  };

  const existingData = JSON.parse(localStorage.getItem("productData")) || [];

  // Add new form data  to the array
  existingData.push(formData);
  // Save form data to local storage
  localStorage.setItem("productFormData", JSON.stringify(existingData));
  // clearFormFields();

  // Reload product data and update the table on the product list page
  loadProductData();
  

}
function loadProductData() {
  const productTable = document.getElementById("productTable");
  productTable.innerHTML = `
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Category</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  `;

  const productData = JSON.parse(localStorage.getItem("productData")) || [];

  productData.forEach((product, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.title}</td>
      <td>${product.description}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>
        <button onclick="editProduct(${index})">Edit</button>
        <button onclick="deleteProduct(${index})">Delete</button>
      </td>
    `;
    productTable.appendChild(row);
  });
}


// Function to edit a product
function editProduct(index) {
  const productData = JSON.parse(localStorage.getItem("productData")) || [];
  const product = productData[index];

  // Save the selected product data to local storage
  localStorage.setItem("editProduct", JSON.stringify(product));

  // Redirect to the product edit page
  window.location.href = "editProduct.html";

}

// Function to delete a product
function deleteProduct(index) {
  const productData = JSON.parse(localStorage.getItem("productData")) || [];

  // Remove the selected product from the product list
  productData.splice(index, 1);

  // Save the updated product data to local storage
  localStorage.setItem("productData", JSON.stringify(productData));

  // Reload product data and update the table
  loadProductData();
}

// Function to clear form fields
function clearFormFields() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("category").value = "";
  document.getElementById("price").value = "";
}