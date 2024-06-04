// Store form data in local storage
const form = document.getElementById("form");
const image = document.getElementById("input-image");
const imageShowed = document.getElementById("image-showed");

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

    // Armazena a imagem no localStorage - Função sendo trabalhada
    const imageSelected = image.files[0];

    if (imageSelected) {
      const reader = new FileReader();
      
      reader.onload = function(event) {
        const base64Image = event.target.result;
        imageShowed.src = `data:image/jpeg;base64,${base64Image}`;
        localStorage.setItem('imageSelected', base64Image);
      };

      reader.readAsDataURL(imageSelected);
    }

    // Verificar se há uma imagem armazenada no LocalStorage
    const imageStored = localStorage.getItem('imageSelected');
    if (imageStored) {
      imageShowed.src = `data:image/jpeg;base64,${imageStored}`;
    }

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