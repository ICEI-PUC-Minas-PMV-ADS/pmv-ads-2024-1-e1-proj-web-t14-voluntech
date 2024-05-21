// Validação Login
function logar() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    // Recupera os dados dos usuários cadastrados no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se há algum usuário com o email fornecido
    const usuario = usuarios.find(user => user.email === email);

    if (usuario && usuario.password === senha) { // Ajuste na comparação da senha
        localStorage.setItem("acesso", true);
        window.location.href = 'login.html';
        alert("Login efetuado com sucesso!");
    } else {
        alert("Email ou senha inválido!");
        window.location.href = 'login.html';
    }
}
