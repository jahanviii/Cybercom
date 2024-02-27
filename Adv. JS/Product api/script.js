document.addEventListener('DOMContentLoaded', () => {
  const url ='https://api.escuelajs.co/api/v1/products';
  let data = []; // Variable to store fetched data

  function fetchData() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
        data = products; // Store fetched data
        renderProducts(products); // Render products initially
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }

  function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear existing content

    products.forEach(product => {
      const container = document.createElement('div');
      container.dataset.id = product.id;
      container.className = 'col-md-3 mb-4';
      container.style.margin = '48px';
      container.style.alignItems = 'center';
      container.style.border = '1px solid black';

      container.innerHTML = `
        <div>
          <img src="${product.images}" style="width: 100%;" />
          <h4>${product.title}</h4>
          <h4>${product.price}</h4>
          <h4>${product.description}</h4>
          <button type="button" class="btn btn-warning" id="edit-quote" data-quote-id="${product.id}">Edit</button>
          <button type="button" class="btn btn-danger" id="delete-quote" data-quote-id="${product.id}">Delete</button>
        </div>
      `;
      
      // Delete functionality
      const deleteButton = container.querySelector('#delete-quote');
      deleteButton.addEventListener('click', () => {
        deleteProduct(product.id);
      });

// Sort functionality
const sortSelect = document.getElementById('sort-select');
sortSelect.addEventListener('change', () => {
  const sortBy = sortSelect.value;
  if (sortBy === 'price-low-to-high') {
      data.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high-to-low') {
      data.sort((a, b) => b.price - a.price);
  }
  renderProducts(data);
});
      // Edit functionality
      const editButton = container.querySelector('#edit-quote');
      editButton.addEventListener('click', () => {
        // editProduct(product.id);
      });

      productList.appendChild(container);
    });
  }

  // Function to delete a product
  function deleteProduct(productId) {
    const userResponse = confirm('Do you want to delete');
    if (userResponse) {
      fetch(`${url}/${productId}`, {
        method: "DELETE"
      })
      .then(response => response.json())
      .then(() => {
        const productDiv = document.querySelector(`[data-id="${productId}"]`);
        if (productDiv) {
          productDiv.remove();
          console.log('Data deleted successfully:', productId);
        }
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
    }
  }

  // Function to edit a product


  // Search functionality
  const searchInput = document.querySelector('#search-input');
  searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value.trim().toLowerCase();
    const filteredData = data.filter(product => {
      const titleMatch = product.title.toLowerCase().includes(searchQuery);
      const descriptionMatch = product.description.toLowerCase().includes(searchQuery);
      return titleMatch || descriptionMatch;
    });
    renderProducts(filteredData);
  });

  // Fetch product list initially
  fetchData();
  //new product add data
 
  
});
