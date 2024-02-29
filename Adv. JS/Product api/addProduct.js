function submitData() {
  const imagesArray = [];
  const productTitle = document.getElementById('product-title').value;
  const productPrice = document.getElementById('product-price').value;
  const productDescription = document.getElementById('description').value;
  const productImageUrl = document.getElementById('image-url').value;
  imagesArray.push(productImageUrl);

  fetch('https://api.escuelajs.co/api/v1/categories')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(categories => {
          const selectCategory = document.getElementById('category-select');
          selectCategory.innerHTML = ''; // Clear existing options

          // Populate select options with fetched categories
          categories.forEach(category => {
              const option = document.createElement('option');
              option.value = category.id;
              option.textContent = category.name;
              selectCategory.appendChild(option);
          });

          // Get selected category ID
          const categoryId = document.getElementById('category-id').value;

          // Set default selected category if exists
          if (categoryId) {
              selectCategory.value = categoryId;
          }

          // Now that categories are populated, submit the data
          sendData();
      })
      .catch(error => {
          console.error('Error fetching categories:', error);
      });

  function sendData() {
      const categoryId = document.getElementById('category-select').value;

      const productData = {
          title: productTitle,
          price: productPrice,
          description: productDescription,
          images: imagesArray,
          categoryId: categoryId
      };

      fetch('https://api.escuelajs.co/api/v1/products/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(productData)
      })
          .then(response => response.json())
          .then(data => {
              alert('Product added successfully');
              console.log('Product added:', data);
          })
          .catch(error => {
              console.error('Error:', error);
              alert('Error adding product. Please try again.');
          });
  }
}
