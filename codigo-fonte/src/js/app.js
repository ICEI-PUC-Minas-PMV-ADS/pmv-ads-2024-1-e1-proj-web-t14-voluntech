const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);
  const data = {};

  // Loop through form data and convert to object
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Store data in local storage
  localStorage.setItem('formData', JSON.stringify(data));

  // Optional: Clear form after successful submission
  // form.reset();

  // You can now handle the data further (e.g., send to server)
  console.log('Form data stored in local storage:', data);
});
