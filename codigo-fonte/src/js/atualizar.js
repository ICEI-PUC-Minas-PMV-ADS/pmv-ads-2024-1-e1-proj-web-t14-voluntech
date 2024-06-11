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

  const nomeInstituicao = localStorage.setItem("nomeInstituicaoLogada", document.querySelector("input#nomeInstituicao").value);
  const cep = localStorage.setItem("cep", document.querySelector("input#cep").value);
  const descricao = localStorage.setItem("descricao", document.querySelector("input#descricao").value);
  const rua = localStorage.setItem("rua", document.querySelector("input#rua").value);
  const cnpj = localStorage.setItem("cnpj", document.querySelector("input#cnpj").value);
  const bairro = localStorage.setItem("bairro", document.querySelector("input#bairro").value);
  const cidade = localStorage.setItem("cidade", document.querySelector("input#cidade").value);
  const telefone = localStorage.setItem("telefone", document.querySelector("input#telefone").value);
  const password = localStorage.setItem("password", document.querySelector("input#password").value);
  const celular = localStorage.setItem("celular", document.querySelector("input#celular").value);
  const email = localStorage.setItem("email", document.querySelector("input#email").value);
  const categorias = localStorage.setItem("categorias", document.querySelector("select#categorias").value);

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