document.getElementById('cardProfile').style.display = 'none';

const botaoPublicar = document.querySelector('#publicar');

// Variável para armazenar o nome da instituição
var instituicao = "";

if (localStorage.getItem('logado') === 'true') {
  // Mostra a div de perfil
  document.getElementById('cardProfile').style.display = 'block';

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verifica se há usuários cadastrados
  if (usuarios.length > 0) {
    const primeiroUsuario = usuarios[0];
    // Obtém o nome da instituição do primeiro usuário
    instituicao = primeiroUsuario.nomeInstituicao;
    // Define o nome da instituição no perfil
    document.getElementById('nomeEditarPerfil').innerText = instituicao;
  } else {
    console.error("Nenhum usuário cadastrado.");
  }
}

// Função para criar e adicionar uma nova postagem
function createAndAddPost() {
  // Obtém o conteúdo da textarea
  var messageContent = document.getElementById('publicacao').value;

  // Verifica se o usuário está logado
  if (localStorage.getItem('logado') === 'true') {
    // Verifica se há conteúdo na publicação
    if (messageContent.trim() !== "") {
      // Cria um novo elemento de postagem
      var newPost = document.createElement('div');
      newPost.className = 'card gedf-card border mb-3';
      
      // Define o conteúdo HTML da nova postagem, incluindo o nome da instituição
      newPost.innerHTML = `
        <div class="card-header">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex justify-content-between align-items-center">
              <div class="mr-2">
                <img class="rounded" width="45" src="img/perfil.png" alt="" />
              </div>
              <div class="ml-2">
                <div class="h5 m-0">${instituicao}</div>
              </div>
            </div>
            <div>
              <div class="dropdown">
                <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-ellipsis-h"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                  <a class="dropdown-item" href="#">Denunciar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="text-muted h7 mb-2">
            <i class="fa fa-clock-o"></i>Agora mesmo
          </div>
          <p class="card-text">
            ${messageContent}
          </p>
        </div>
      `;

      // Adiciona a nova postagem à seção de postagens
      document.getElementById('posts-section').prepend(newPost);

      // Limpa a textarea
      document.getElementById('publicacao').value = '';

      // Exibe uma mensagem de alerta
      Swal.fire({
        title: "Publicado!",
        text: "Foi publicado com sucesso.",
        icon: "success",
        customClass: {
          confirmButton: "btn btn-success",
        },
        buttonsStyling: false
      });
    } else {
      Swal.fire({
        title: "Aviso!",
        text: "Por favor, escreva uma mensagem antes de publicar.",
        icon: "error",
        customClass: {
          confirmButton: "btn btn-danger",
        },
        buttonsStyling: false
      });
    }
  } else {
    Swal.fire({
      title: "Aviso!",
      text: "Você precisa estar logado para publicar.",
      icon: "error",
      customClass: {
        confirmButton: "btn btn-danger",
      },
      buttonsStyling: false
    });
  }
}

// Associa uma função anônima ao evento de clique do botão
botaoPublicar.addEventListener('click', function() {
  createAndAddPost();
});

// Adiciona um evento de clique ao botão de editar perfil
document.getElementById('btnEditarPerfil').addEventListener('click', function() {
  // Redireciona o usuário para a página de atualização de cadastro
  window.location.href = 'atualizacao-de-cadastro.html';
});


// Função para verificar e atualizar o link de entrar/sair
function atualizarLinkEntrarSair() {
  var linkEntrarSair = document.getElementById('linkEntrarSair');
  if (localStorage.getItem('logado') === 'true') {
    // Se o usuário estiver logado, altera o href para a página de logout (ou para onde você deseja que o link de sair leve)
    linkEntrarSair.href = 'login.html'; // Atualize para o link de logout correto
    // Altera o texto do link para "Sair"
    linkEntrarSair.innerText = 'Sair';
  } else {
    // Se o usuário não estiver logado, mantém o href para a página de login
    linkEntrarSair.href = 'login.html';
    // Mantém o texto do link como "Entrar"
    linkEntrarSair.innerText = 'Entrar';
  }
}

// Chama a função para atualizar o link de entrar/sair quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
  atualizarLinkEntrarSair();
});