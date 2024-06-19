// Recupera os dados dos usuários cadastrados no localStorage
const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// atualizar dados do usuário no localStorage

localStorage.setItem("usuarios" , document.querySelector("input#nomeInstituicao").value)
    
localStorage.setItem("usuarios" , document.querySelector("input#descricao").value)

localStorage.setItem("rua" , document.querySelector("input#rua").value)

localStorage.setItem("cep" , document.querySelector("input#cep").value)

localStorage.setItem("cnpj" , document.querySelector("input#cnpj").value)

localStorage.setItem("bairro" , document.querySelector("input#bairro").value)

localStorage.setItem("cidade" , document.querySelector("input#cidade").value)

localStorage.setItem("telefone" , document.querySelector("input#telefone").value)

localStorage.setItem("password" , document.querySelector("input#password").value)

localStorage.setItem("celular" , document.querySelector("input#celular").value)

localStorage.setItem("email", document.querySelector("input#email").value)

localStorage.setItem("categorias" , document.querySelector("input#categorias").value)


// Persistir dados do usuário logado no formulário

document.querySelector("#nomeInstituicao").value = localStorage.getItem("usuarios");

document.querySelector("#cep").value = localStorage.getItem("cep");

document.querySelector("#descricao").value = localStorage.getItem("usuarios");

document.querySelector("#rua").value = localStorage.getItem("rua");

document.querySelector("input#cnpj").value = localStorage.getItem("cnpj");
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
      window.location.href = "atualizacao-de-cadastro.html"; // Substitua pelo URL da sua página de feed
    }
      , 2000);
  });
}