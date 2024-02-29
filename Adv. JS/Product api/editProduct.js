document.addEventListener("DOMContentLoaded", function(){
  const editProductForm = document.getElementById('editProductForm');
  // Get ID parameter from URL
  const productId = new URLSearchParams(window.location.search).get('id');
  console.log('Product ID:', productId); // Check if the product ID is correct

  // Fetch product data based on the product ID from the URL
  fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error(`Failed to fetch product data. Status: ${response.status}`);
          }
      })
      .then(product => {
          // Bind product data
          document.getElementById('title').value = product.title;
          document.getElementById('imageUrl').value = product.images[0];
          document.getElementById('price').value = product.price;
          document.getElementById('description').value = product.description;
          document.getElementById('category').value = product.category.name;
          document.getElementById('category').disabled = true; 
      })
      .catch(error => {
          console.error('Error fetching product data:', error);
          alert('Error fetching product data. Please try again.');
      });

  // Event listener for form submission
  editProductForm.addEventListener('submit', function(event) {
      event.preventDefault();
      if (validateForm()) {
          // Retrieve form data
          const title = document.getElementById('title').value.trim();
          const imageUrl = document.getElementById('imageUrl').value.trim();
          const price = document.getElementById('price').value.trim();
          const description = document.getElementById('description').value.trim();

          const updatedProduct = {
              title: title,
              images: [imageUrl],
              price: parseFloat(price),
              description: description
          };

          // Update product
          fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedProduct)
          })
          .then(response => {
              if (response.ok) {
                  alert('Product updated successfully.');
                  editProductForm.reset(); 
              } else {
                  throw new Error(`Failed to update product. Status: ${response.status}`);
              }
          })
          .catch(error => {
              console.error('Error updating product:', error);
              alert('Error updating product. Please try again.');
          });
      }
  });

  // Function to validate form data
  function validateForm() {
      const title = document.getElementById('title').value.trim();
      const imageUrl = document.getElementById('imageUrl').value.trim();
      const price = document.getElementById('price').value.trim();
      const description = document.getElementById('description').value.trim();

      if (title === '' || imageUrl === '' || price === '' || description === '') {
          alert('Please fill in all fields.');
          return false;
      }
      if (isNaN(parseFloat(price)) || parseFloat(price) <= 0) {
          alert('Please enter a valid price.');
          return false;
      }

      return true;
  }
});
