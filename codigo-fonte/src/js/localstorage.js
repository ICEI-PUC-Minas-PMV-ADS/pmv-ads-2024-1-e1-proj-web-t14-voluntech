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
      
    // Armazena a imagem em base64
    const imageSelected = document.getElementById("input-image").files[0];
    if (imageSelected) {
      const reader = new FileReader();

      reader.onload = function(event) {
        const base64Image = event.target.result;
        data.image = base64Image; // Adiciona a imagem ao objeto de dados
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Atualiza o localStorage
      };

      reader.readAsDataURL(imageSelected);
    }

    // Verifica se a imagem foi selecionada
    if (!imageSelected) {
      Swal.fire({
        title: "Aviso!",
        text: "Selecione uma imagem!",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-danger",
        },
        buttonsStyling: false
      })
      return;
    }

    // Valida se o e-mail já existe no portal das instituições
    if (usuarios.some(user => user.email === data.email)) {
      Swal.fire({
        title: "Aviso!",
        text: "E-mail já existe!",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-danger",
        },
        buttonsStyling: false
      })
      return;
    }

    // Valida se o CNPJ já existe
    if (usuarios.some(user => user.cnpj === data.cnpj)) {
      Swal.fire({
        title: "Aviso!",
        text: "CNPJ já existe!",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-danger",
        },
        buttonsStyling: false
      })
      return;
    }
  
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
    }).then(() => {
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
    })
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
