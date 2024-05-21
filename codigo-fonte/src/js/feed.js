//visualizacao do editar perfil
document.getElementById('cardProfile').style.display = 'none';

const mensagemAlerta = "Sua publicação foi enviada com sucesso!";

const botaoPublicar = document.querySelector('#publicar');

// Função para criar e adicionar uma nova postagem
function createAndAddPost() {
  // Obtém o conteúdo da textarea
  var messageContent = document.getElementById('publicacao').value;

  if (messageContent.trim() !== "") {
    // Cria um novo elemento de postagem
    var newPost = document.createElement('div');
    newPost.className = 'card gedf-card border mb-3';
    
    // Define o conteúdo HTML da nova postagem
    newPost.innerHTML = `
      <div class="card-header">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex justify-content-between align-items-center">
            <div class="mr-2">
              <img class="rounded" width="45" src="img/perfil.png" alt="" />
            </div>
            <div class="ml-2">
              <div class="h5 m-0">Novo Usuário</div>
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
    alert(mensagemAlerta);
  } else {
    alert('Por favor, escreva uma mensagem antes de publicar.');
  }
}

// Associa uma função anônima ao evento de clique do botão
botaoPublicar.addEventListener('click', function() {
  createAndAddPost();
});
