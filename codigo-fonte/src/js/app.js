// Validação do Formulário
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Fim da Validação do Formulário

// Store form data in local storage
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

// Máscara para Telefone com Expressão Regular
const telefone = document.getElementById("telefone");
telefone.addEventListener('input', () => {
  telefone.value = telefone.value.replace(/\D/g, '');
  telefone.value = telefone.value.replace(/^(\d{2})(\d)/g, '($1) $2');
  telefone.value = telefone.value.replace(/(\d)(\d{4})$/, '$1-$2');
})

// Máscara para Celular com Expressão Regular
const celular = document.getElementById("celular");
celular.addEventListener('input', () => {
  celular.value = celular.value.replace(/\D/g, '');
  celular.value = celular.value.replace(/^(\d{2})(\d)/g, '($1) $2');
  celular.value = celular.value.replace(/(\d)(\d{4})$/, '$1-$2');
})

// Máscara para CNPJ com Expressão Regular
const cnpj = document.getElementById("cnpj");
cnpj.addEventListener('input', () => {
  cnpj.value = cnpj.value.replace(/\D/g, '');
  cnpj.value = cnpj.value.replace(/^(\d{2})(\d)/, '$1.$2');
  cnpj.value = cnpj.value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
  cnpj.value = cnpj.value.replace(/\.(\d{3})(\d)/, '.$1/$2');
  cnpj.value = cnpj.value.replace(/(\d{4})(\d)/, '$1-$2');
})

// Máscara para CEP com Expressão Regular
const cep = document.getElementById("cep");
cep.addEventListener('input', () => {
  cep.value = cep.value.replace(/\D/g, '');
  cep.value = cep.value.replace(/^(\d{5})(\d)/, '$1-$2');
})