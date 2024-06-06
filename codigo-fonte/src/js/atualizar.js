// atualizar o cadastro quando o usuário estiver logado
function atualizar() {
  const nomeInstituicaoLogada = localStorage.getItem('nomeInstituicaoLogada');
  if (nomeInstituicaoLogada) {
    const nomeInstituicao = document.querySelector('#nomeInstituicao');
    nomeInstituicao.textContent = nomeInstituicaoLogada;
  }
}

atualizar();

// persistir os dados do formulário
     
/*
  function salvar() {
     
  localStorage.setItem("nomeInstituicao" , document.querySelector("input#nomeInstituicao").value)
  
  localStorage.setItem("cep" , document.querySelector("input#cep").value)
  
  localStorage.setItem("cnpj" , document.querySelector("input#cnpj").value)
  
  localStorage.setItem("bairro" , document.querySelector("input#bairro").value)
  
  localStorage.setItem("cidade" , document.querySelector("input#cidade").value)
  
  localStorage.setItem("telefone" , document.querySelector("input#telefone").value)
  
  localStorage.setItem("password" , document.querySelector("input#password").value)
  
  localStorage.setItem("celular" , document.querySelector("input#celular").value)

  localStorage.setItem("email", document.querySelector("input#email").value)
  
  localStorage.setItem("categorias" , document.querySelector("input#categorias").value)

}

{

document.querySelector("input#nomeInstituicao").value = localStorage.getItem("nomeInstituicao");

document.querySelector("#cep").value = localStorage.getItem("cep");

document.querySelector("input#cnpj").value = localStorage.getItem("cnpj");

document.querySelector("#bairro").value = localStorage.getItem("bairro");

document.querySelector("#cidade").value = localStorage.getItem("cidade");

document.querySelector("#telefone").value = localStorage.getItem("telefone");

document.querySelector("#password").value = localStorage.getItem("password");

document.querySelector("#celular").value = localStorage.getItem("celular");

document.querySelector("input#email").value = localStorage.getItem("email");

document.querySelector("input#categorias").value = localStorage.setItem("categorias");
}
*/