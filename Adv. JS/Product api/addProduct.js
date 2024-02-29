

function submitData() {
    // const imagesArray = [];
    // const productTitle = document.getElementById('product-title').value;
    // const productPrice = document.getElementById('product-price').value;
    // const productDescription = document.getElementById('description').value;
    // const productImageUrl = document.getElementById('image-url').value;
    // imagesArray.push(productImageUrl);
  
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
  
            const categoryId = document.getElementById('category-select').value;
  
            if (categoryId) {
                selectCategory.value = categoryId;
            }
  
            sendData();
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
        });
  }
  function sendData() {
    const imagesArray = [];
    const productImageUrl = document.getElementById('image-url').value;
    imagesArray.push(productImageUrl);
    const product = {
        title: document.getElementById('product-title').value,
        price: document.getElementById('product-price').value,
        description: document.getElementById('description').value,
        images: imagesArray,
        categoryId: document.getElementById('category-select').value
    };
  
    fetch('https://api.escuelajs.co/api/v1/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Product created:', data);
        document.getElementById('product-title').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image-url').value = '';
        imagesArray.length = 0;
                // document.getElementById('category-select').value = '';
    })
    .catch(error => {
        console.error('Error creating product:', error);
    });
  }
  submitData();