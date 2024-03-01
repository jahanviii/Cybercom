document.addEventListener('DOMContentLoaded', () => {
  const url ='https://api.escuelajs.co/api/v1/products';
  let data = []; 
  let currentPage = 1;
    const itemsPerPage = 9;
  function fetchData() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(products => {
        data = products; 
        renderProductsByPage(1); 
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }
// render product per page
function renderProductsByPage(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productsToShow = data.slice(startIndex, endIndex);
  renderProducts(productsToShow);
}
// render product
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
  renderProductsByPage(1);
  // renderProducts(data);
});
//filter functionality
const categorySelect = document.getElementById('category-select');
categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    if (selectedCategory !== 'all') {
        fetchProductsByCategory(selectedCategory)
            .then(products => {
                // renderProductsByPage(1);
                renderProducts(products);
            });
    } else {
        renderProducts(data); 
    }
});
// category
function fetchProductsByCategory(categoryId) {
  const categoryUrl = `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`;
  return fetch(categoryUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .catch(error => {
          console.log('Error fetching category products:', error);
      });
}
      // Edit functionality
      const editButton = container.querySelector('#edit-quote');
      editButton.addEventListener('click', () => {
         window.open(`editProduct.html?id=${product.id}`,'_blank')
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
//pagination
// Pagination buttons
const prevPageBtn = document.getElementById('prev-page-btn');
const nextPageBtn = document.getElementById('next-page-btn');

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProductsByPage(currentPage);
    }
});

nextPageBtn.addEventListener('click', () => {
    const maxPage = Math.ceil(data.length / itemsPerPage);
    if (currentPage < maxPage) {
        currentPage++;
        renderProductsByPage(currentPage);
    }
});
  // Fetch product list initially
  fetchData();
  //new product add data
 
  
});
