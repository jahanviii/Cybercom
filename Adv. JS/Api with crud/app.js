document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://api.quotable.io/quotes?page=1';

  function fetchQuotes() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('quotes-container');
        data.results.forEach(element => {
          const div = document.createElement('div');
          div.className = 'col-md-3 mb-4';
          div.style.margin = '6px';
          div.style.alignItems = 'center';
          div.style.border = '1px solid black';
          div.innerHTML = `
              <div>
                <h2>Quote: ${element.content}</h2>
                <h3>Author: ${element.author}</h3>
                <button type="button" class="btn btn-primary" id="edit-quote" data-product-id="${element.id}">Edit</button>
              <button type="button" class="btn btn-danger" id="delete-quote" data-product-id="${element.id}">Delete</button>
              </div>
            `;
          container.appendChild(div);

          //delete
          const deleteBtn = div.querySelector('#delete-quote');
deleteBtn.addEventListener('click', () => {
  const quoteId = deleteBtn.dataset.quoteId;
  fetch(`https://api.quotable.io/quotes/${quoteId}`, {
    method: 'DELETE',
  })
  .then(() => {
    data.results = data.results.filter(quote => quote.id !== quoteId);
    div.remove();
  })
        })

        //edit button
        const editBtn = div.querySelector('#edit-quote');
        editBtn.addEventListener('click', () => {
          const quoteId = editBtn.dataset.quoteId;
          const quoteContent = prompt('Enter the new quote:');
          const quoteAuthor = prompt('Enter the new author:');
          if (quoteContent && quoteAuthor) {
            //find id 
            const updatedQuote = data.results.find(quote => quote.id === quoteId);
            updatedQuote.content = quoteContent;
            updatedQuote.author = quoteAuthor;
            div.querySelector('h2').textContent = `Quote: ${quoteContent}`;
            div.querySelector('h3').textContent = `Author: ${quoteAuthor}`;
        
            //send PUT request to update quote on server
            fetch(`https://api.quotable.io/quotes/${quoteId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(updatedQuote)
            })
            .then(response => response.json())
            .then(data => {
              console.log('Quote updated:', data);
            })
            .catch(error => {
              console.log(error);
            });
          }
        });
        //
        });

      })
      .catch(error => {
        console.log(error);
      });
  }
  //on add quote button
  const quoteForm = document.getElementById('quote-form');
    quoteForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const quote = {
        id: Date.now(),
        text: document.getElementById('quote').value,
        author: document.getElementById('author').value
      };
      createQuote(quote)
      quoteForm.reset();
    });
//new quote add
function createQuote(quote) {
  let savedQuotes = JSON.parse(localStorage.getItem('newQuotes'))||[];
savedQuotes.push(quote); 

  localStorage.setItem('newQuotes', JSON.stringify(savedQuotes));

  const container = document.getElementById('new-quotes-container');
  container.innerHTML = ''; 

  savedQuotes.forEach(element => {
      console.log('Quote created:', element);
      const div = document.createElement('div');
      div.className = 'col-md-3 mb-4';
      div.style.margin = '6px';
      div.style.alignItems = 'center';
      div.style.border = '1px solid black';
      div.innerHTML = ` <div>
          <h2>Quote: ${element.text}</h2>
          <h3>Author: ${element.author}</h3>
          <button type="button" class="btn btn-primary" id="edit-quote" data-quote-id="${element.id}">Edit</button>
          <button type="button" class="btn btn-danger" id="delete-quote" data-quote-id="${element.id}">Delete</button>
      </div>`;
      container.appendChild(div);
  });
 
}
fetchQuotes();  
})

// const quoteForm = document.getElementById('quote-form');
//   quoteForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const quote = {
//       id: Date.now(),
//       text: document.getElementById('quote').value,
//       author: document.getElementById('author').value
//     };
//     localStorage.setItem('newQuotes',JSON.stringify(quote))
//     createQuote(quote)
   
//     quoteForm.reset();
//   });
//   //crete fun
//   function createQuote(quote) {
//     const savedQuotes = JSON.parse(localStorage.getItem('newQuotes'));
//     // savedQuotes.forEach(element=>{
//       console.log('Quote created:', data);
//       const container = document.getElementById('new-quotes-container');
//       const div = document.createElement('div');
//       div.className = 'col-md-3 mb-4';
//       div.style.margin = '6px';
//       div.style.alignItems = 'center';
//       div.style.border = '1px solid black';
//       div.innerHTML = ` <div>
//       <h2>Quote: ${savedQuotes.text}</h2>
//       <h3>Author: ${savedQuotes.author}</h3>
//       <button type="button" class="btn btn-primary" id="edit-quote" data-quote-id="${savedQuotes.id}">Edit</button>
//     <button type="button" class="btn btn-danger" id="delete-quote" data-quote-id="${savedQuotes.id}">Delete</button>
//     </div>
//   `;
// container.appendChild(div);

// // })
//     }
  
    // fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(quote)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Quote created:', data);
    //   const container = document.getElementById('new-quotes-container');
    //   const div = document.createElement('div');
    //   div.className = 'col-md-3 mb-4';
    //   div.style.margin = '6px';
    //   div.style.alignItems = 'center';
    //   div.style.border = '1px solid black';
    //   div.innerHTML = `
    //             <div>
    //               <h2>Quote: ${quote.text}</h2>
    //               <h3>Author: ${quote.author}</h3>
    //               <button type="button" class="btn btn-primary" id="edit-quote" data-quote-id="${quote.id}">Edit</button>
    //             <button type="button" class="btn btn-danger" id="delete-quote" data-quote-id="${quote.id}">Delete</button>
    //             </div>
    //           `;
    //   container.appendChild(div);

    // })
//   }
//         //fetch all quotes
//         fetchQuotes();
// });





