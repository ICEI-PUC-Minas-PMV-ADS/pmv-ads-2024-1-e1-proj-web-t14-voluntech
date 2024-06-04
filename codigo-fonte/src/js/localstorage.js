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