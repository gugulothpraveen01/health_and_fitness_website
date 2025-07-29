const scriptURL = 'https://script.google.com/macros/s/AKfycbwFb_PNddj9kKW8drrFI9BuvKX_LlqpQHvjeQG7WyLTmDgLn0Id8x7cpfUip7mlaJw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))  
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})