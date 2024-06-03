// Validação do formulário de cadastro geral
(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Store form data in local storage
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita a submissão padrão do formulário

  const formData = new FormData(form);
  const data = {};

  // Loop através dos dados do formulário e converte para objeto
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  // Validação dos campos do formulário
  const isFormValid = validateForm(data);

  if (isFormValid) {
    // Recupera os dados do localStorage, se existirem, ou inicializa um array vazio
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Adiciona os dados do novo usuário ao array
    usuarios.push(data);

    // Armazena o array atualizado no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Exibe um modal de sucesso de cadastro
    Swal.fire({
      title: 'Sucesso!',
      text: 'Cadastro efetuado com sucesso.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: "btn btn-success",
      },
      buttonsStyling: false
    })
    .then(() => {
      setTimeout(() => {
        window.location.href = "login.html"; // Substitua pelo URL da sua página de login
      }, 2000);
    });

  } else {
    Swal.fire({
      title: "Aviso!",
      text: "Preencha todos os campos!",
      icon: "error",
      customClass: {
        confirmButton: "btn btn-danger",
      },
      buttonsStyling: false
    });
  }

});

// Função para validar os campos do formulário
function validateForm(data) {
  let isFormValid = true;

  // Verifica se todos os campos estão preenchidos
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (!data[key]) {
        isFormValid = false;
        break;
      }
    }
  }

  // Realize qualquer outra validação necessária aqui (por exemplo, validação de senha, formato de email, etc.)

  return isFormValid;
}

// Máscara para Telefone com Expressão Regular
const telefone = document.getElementById("telefone");
telefone.addEventListener("input", () => {
  telefone.value = telefone.value.replace(/\D/g, "");
  telefone.value = telefone.value.replace(/^(\d{2})(\d)/g, "($1) $2");
  telefone.value = telefone.value.replace(/(\d)(\d{4})$/, "$1-$2");
});

// Máscara para Celular com Expressão Regular
const celular = document.getElementById("celular");
celular.addEventListener("input", () => {
  celular.value = celular.value.replace(/\D/g, "");
  celular.value = celular.value.replace(/^(\d{2})(\d)/g, "($1) $2");
  celular.value = celular.value.replace(/(\d)(\d{4})$/, "$1-$2");
});

// Máscara para CNPJ com Expressão Regular
const cnpj = document.getElementById("cnpj");
cnpj.addEventListener("input", () => {
  cnpj.value = cnpj.value.replace(/\D/g, "");
  cnpj.value = cnpj.value.replace(/^(\d{2})(\d)/, "$1.$2");
  cnpj.value = cnpj.value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
  cnpj.value = cnpj.value.replace(/\.(\d{3})(\d)/, ".$1/$2");
  cnpj.value = cnpj.value.replace(/(\d{4})(\d)/, "$1-$2");
});

// Máscara para CEP com Expressão Regular
const cep = document.getElementById("cep");
const endereco = document.getElementById("bairro");

cep.addEventListener("input", async () => {
  cep.value = cep.value.replace(/\D/g, "");
  cep.value = cep.value.replace(/^(\d{5})(\d)/, "$1-$2");

  const url = `https://viacep.com.br/ws/${cep.value}/json/`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        return;
      }
      bairro.value = data.logradouro + " - " + data.bairro;
      cidade.value = data.localidade + " / " + data.uf;
    });
});

// Botão com efeito hide/show para senha
function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}

// Validação de senha pelo cadastro
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.getElementById("message").style.display = "none";
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
