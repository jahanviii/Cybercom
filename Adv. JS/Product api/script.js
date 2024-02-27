document.addEventListener('DOMContentLoaded', () => {
  const url ='https://api.escuelajs.co/api/v1/products';

  function fetchData() {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const productList = document.getElementById('product-list');
        // productList.innerHTML = ''; // Clear existing content
        data.forEach(element => {
          const container = document.createElement('div');
          container.dataset.id=element.id;
          container.className = 'col-md-3 mb-4';
          container.style.margin = '48px';
          // container.style.padding='3px'
          container.style.alignItems = 'center';
          container.style.border = '1px solid black';

          container.innerHTML = `
            <div>
            <img src="{element.images[0]}" style="width: 100%;" />

              <h4>${element.title}</h4>
              <h4>${element.price}</h4>
              <h4>${element.description}</h4>
              <button type="button" class="btn btn-warning"
              id="edit-quote" data-quote-id="${element.id}">Edit</button>
              <button type="button" class="btn btn-danger"
              id="delete-quote" data-quote-id="${element.id}">Delete</button>

            </div>
          `;
          productList.appendChild(container);
            //on delete
      const deleteButton = container.querySelector('#delete-quote');
      deleteButton.addEventListener('click', () => {
        deleteProduct(element.id);
      });
    //edit 
    const editButton = container.querySelector('#edit-quote');
    editButton.addEventListener('click', () => {
      editProduct(element.id);
    }); 
        });
      }) .catch(error => {
        console.log('Error fetching data:', error);
      });
  }
//function of delete
function deleteProduct(productId){
  const userResponse=confirm('Do you want to delete');
  if(userResponse){
   fetch(`${url}/${productId}`,{
    method:"DELETE"
   }).then(response=>response.json())
   .then(()=>{
    const productDiv = document.querySelector(`[data-id="${productId}"]`);
    if (productDiv) {
      productDiv.remove();
      console.log('Data deleted successfully:',productId);

    }
  })
  .catch(error => {
    console.error('Error deleting product:', error);
  });
  }
}
//function of edit
function editProduct(){

}
//fetch product list
  fetchData();
});
