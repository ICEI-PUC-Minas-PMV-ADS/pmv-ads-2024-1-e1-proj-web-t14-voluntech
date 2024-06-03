document.getElementById('cardProfile').style.display = 'none';

const botaoPublicar = document.querySelector('#publicar');

document.addEventListener('DOMContentLoaded', function() {
  // Verifica se o usuário está logado
  if (localStorage.getItem('logado') === 'true') {
    // Mostra a div de perfil
    document.getElementById('cardProfile').style.display = 'block';

    // Recupera o nome da instituição do usuário logado do localStorage
    const nomeInstituicaoLogada = localStorage.getItem('nomeInstituicaoLogada');

    // Verifica se o nome da instituição do usuário logado está disponível
    if (nomeInstituicaoLogada) {
      // Define o nome da instituição no perfil
      document.getElementById('nomeEditarPerfil').innerText = nomeInstituicaoLogada;
    } else {
      console.error("Nome da instituição do usuário logado não encontrado.");
    }
  }

  // Recupera todas as postagens armazenadas
  const postagens = JSON.parse(localStorage.getItem('postagens')) || [];

  // Exibe as postagens na interface do usuário
  postagens.forEach(function(postagem) {
    exibirPostagem(postagem);
  });

  // Função para armazenar o conteúdo publicado no localStorage
  function armazenarConteudoPublicado(messageContent) {
    // Recupera todas as postagens já armazenadas ou inicializa um array vazio
    const postagens = JSON.parse(localStorage.getItem('postagens')) || [];
    // Recupera o nome da instituição logada
    const nomeInstituicao = localStorage.getItem('nomeInstituicaoLogada');
    // Obtém a data e hora atual
    const dataHoraAtual = new Date().toLocaleString();

    // Cria um objeto JSON com o conteúdo da postagem e o nome da instituição
    const postagem = {
      instituicao: nomeInstituicao,
      conteudo: messageContent,
      dataHora: dataHoraAtual
    };

    // Adiciona a nova postagem ao array de postagens
    postagens.push(postagem);

    // Converte o array de postagens em uma string
    const postagensString = JSON.stringify(postagens);

    // Armazena a string JSON no localStorage
    localStorage.setItem('postagens', postagensString);

    // Exibe a nova postagem na interface do usuário sem recarregar a página
    exibirPostagem(postagem);
  }

  // Função para exibir uma postagem na interface do usuário
  function exibirPostagem(postagem) {
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
              <div class="h5 m-0">${postagem.instituicao}</div>
            </div>
          </div>
          <div>
            <div class="dropdown">
              <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fa fa-ellipsis-h"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                <a class="dropdown-item denunciar-btn" href="#" >Denunciar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <div class="text-muted h7 mb-2">
          <i class="fa fa-clock-o"></i>${postagem.dataHora}
        </div>
        <p class="card-text">
          ${postagem.conteudo}
        </p>
      </div>
    `;

    // Adiciona a nova postagem à seção de postagens
    document.getElementById('posts-section').prepend(newPost);
  }

  // Função para criar e adicionar uma nova postagem
  function createAndAddPost() {
    // Obtém o conteúdo da textarea
    var messageContent = document.getElementById('publicacao').value;

    // Verifica se o usuário está logado
    if (localStorage.getItem('logado') === 'true') {
      // Verifica se há conteúdo na publicação
      if (messageContent.trim() !== "") {
        // Armazena o conteúdo publicado
        armazenarConteudoPublicado(messageContent);

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
          footer: '<a href="portal-das-instituicoes.html">Cadastre-se aqui!</a>',
          customClass: {
            confirmButton: "btn btn-danger",
          },
          buttonsStyling: false
        });
      }
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
  // Adiciona um evento de clique ao botão de denúncia
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('denunciar-btn')) {
      Swal.fire({
        title: "Denúncia Registrada!",
        text: "Sua denúncia foi registrada com sucesso.",
        icon: "success",
        customClass: {
          confirmButton: "btn btn-success",
        },
        buttonsStyling: false
      });
    }
  });

});
