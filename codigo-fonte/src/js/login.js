// Validação Login
function logar() {
    var email = document.getElementById("#email");
    var senha = document.getElementById("#password");

    console.log(email.value, senha.value);

    if (email.value === 'admin@admin.com' && senha.value === 'admin') {
        localStorage.setItem("acesso", true);
        window.location.href = 'atualizacao-de-cadastro.html';
        alert("Login efetuado com sucesso!");
    } else {
        alert("Email ou senha inválido!");
    }

}