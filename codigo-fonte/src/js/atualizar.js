// Mostrar os dados do usuário logado
const usuarios = JSON.parse(localStorage.getItem("usuarios"));

const nomeInstituicaoLogada = localStorage.getItem("nomeInstituicaoLogada");

const usuarioLogado = usuarios.find((usuario) => usuario.nomeInstituicao === nomeInstituicaoLogada);

document.querySelector("input#nomeInstituicao").value = usuarioLogado.nomeInstituicao;

document.querySelector("input#cep").value = usuarioLogado.cep;

document.querySelector("input#descricao").value = usuarioLogado.descricao;

document.querySelector("input#rua").value = usuarioLogado.rua;

document.querySelector("input#cnpj").value = usuarioLogado.cnpj;

document.querySelector("input#bairro").value = usuarioLogado.bairro;

document.querySelector("input#cidade").value = usuarioLogado.cidade;

document.querySelector("input#telefone").value = usuarioLogado.telefone;

document.querySelector("input#password").value = usuarioLogado.password;

document.querySelector("input#celular").value = usuarioLogado.celular;

document.querySelector("input#email").value = usuarioLogado.email;

document.querySelector("select#categorias").value = usuarioLogado.categorias;

// Função para atualizar
function atualizar() {

  // Atualizar os dados do formulário e mantê-los no localStorage
  const nomeInstituicao = document.querySelector("input#nomeInstituicao").value;
  const cep = document.querySelector("input#cep").value;
  const descricao = document.querySelector("input#descricao").value;
  const rua = document.querySelector("input#rua").value;
  const cnpj = document.querySelector("input#cnpj").value;
  const bairro = document.querySelector("input#bairro").value;
  const cidade = document.querySelector("input#cidade").value;
  const telefone = document.querySelector("input#telefone").value;
  const password = document.querySelector("input#password").value;
  const celular = document.querySelector("input#celular").value;
  const email = document.querySelector("input#email").value;
  const categorias = document.querySelector("select#categorias").value;

  localStorage.setItem("nomeInstituicaoLogada", nomeInstituicao);
  localStorage.setItem("cep", cep);
  localStorage.setItem("descricao", descricao);
  localStorage.setItem("rua", rua);
  localStorage.setItem("cnpj", cnpj);
  localStorage.setItem("bairro", bairro);
  localStorage.setItem("cidade", cidade);
  localStorage.setItem("password", password);
  localStorage.setItem("telefone", telefone);
  localStorage.setItem("celular", celular);
  localStorage.setItem("email", email);
  localStorage.setItem("categorias", categorias);

  // Atualizar os dados do usuário logado
  const indice = usuarios.findIndex((usuario) => usuario.email === email);
  usuarios[indice].nomeInstituicao = nomeInstituicao;
  usuarios[indice].cep = cep;
  usuarios[indice].descricao = descricao;
  usuarios[indice].rua = rua;
  usuarios[indice].cnpj = cnpj;
  usuarios[indice].bairro = bairro;
  usuarios[indice].cidade = cidade;
  usuarios[indice].password = password;
  usuarios[indice].celular = celular;
  usuarios[indice].telefone = telefone;
  usuarios[indice].email = email;
  usuarios[indice].categorias = categorias;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Exibir mensagem de sucesso
  Swal.fire({
    title: 'Sucesso!',
    text: 'Atualização efetuada com sucesso.',
    icon: 'success',
    confirmButtonText: 'OK',
    customClass: {
      confirmButton: "btn btn-success",
    },
    buttonsStyling: false
  }).then(() => {
    setTimeout(() => {
      window.location.href = "feed.html"; // Substitua pelo URL da sua página de feed
    }
      , 2000);
  });
}

// Função para excluir o cadastro
function excluirCadastro() {
  Swal.fire({
    title: 'Tem certeza?',
    text: 'Esta ação é irreversível e excluirá permanentemente seu cadastro.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Sim, excluir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Obter o nome da instituição que está sendo excluída
      const nomeInstituicaoExcluida = localStorage.getItem('nomeInstituicaoLogada');
      // Excluir o usuário do localStorage
      const email = document.querySelector("input#email").value;
      const indice = usuarios.findIndex((usuario) => usuario.email === email);
      usuarios.splice(indice, 1);
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      // Limpar todos os dados do localStorage
      localStorage.removeItem("nomeInstituicaoLogada");
      localStorage.removeItem("cep");
      localStorage.removeItem("descricao");
      localStorage.removeItem("rua");
      localStorage.removeItem("cnpj");
      localStorage.removeItem("bairro");
      localStorage.removeItem("cidade");
      localStorage.removeItem("password");
      localStorage.removeItem("telefone");
      localStorage.removeItem("celular");
      localStorage.removeItem("email");
      localStorage.removeItem("categorias");
      localStorage.removeItem("imagemPerfil");

      // Limpar dados sensíveis do localStorage
      localStorage.removeItem("nomeInstituicaoLogada");
      localStorage.removeItem("emailUsuarioLogado");

      // Sinalizar que não há usuário logado
      localStorage.setItem('logado', 'false');

      // Recuperar as postagens armazenadas no localStorage
      const postagens = JSON.parse(localStorage.getItem('postagens')) || [];

      // Filtrar as postagens para manter apenas aquelas que não pertencem à instituição excluída
      const postagensAtualizadas = postagens.filter(postagem => postagem.instituicao !== nomeInstituicaoExcluida);

      // Atualizar o localStorage com as postagens filtradas
      localStorage.setItem('postagens', JSON.stringify(postagensAtualizadas));

      Swal.fire({
        title: 'Excluído!',
        text: 'Seu cadastro foi excluído com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: "btn btn-success",
        },
        buttonsStyling: false
      }).then(() => {
        // Redirecionar para a página inicial após a exclusão
        window.location.href = "feed.html";
      });
    }
  });
}