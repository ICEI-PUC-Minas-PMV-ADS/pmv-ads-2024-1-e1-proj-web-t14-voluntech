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

// Função para atualizar os dados
function atualizar() {

  localStorage.setItem("nomeInstituicao", document.querySelector("input#nomeInstituicao").value)

  localStorage.setItem("cep", document.querySelector("input#cep").value)

  localStorage.setItem("cnpj", document.querySelector("input#cnpj").value)

  localStorage.setItem("bairro", document.querySelector("input#bairro").value)

  localStorage.setItem("cidade", document.querySelector("input#cidade").value)

  localStorage.setItem("telefone", document.querySelector("input#telefone").value)

  localStorage.setItem("password", document.querySelector("input#password").value)

  localStorage.setItem("celular", document.querySelector("input#celular").value)

  localStorage.setItem("email", document.querySelector("input#email").value)

  localStorage.setItem("categorias", document.querySelector("input#categorias").value)

}