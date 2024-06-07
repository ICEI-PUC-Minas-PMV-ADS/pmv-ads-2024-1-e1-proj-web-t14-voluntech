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
