// Fazer login com localStorage e usar os botões do Swal
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Recupera os dados dos usuários cadastrados no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verifica se há algum usuário com o email fornecido
    const usuario = usuarios.find(user => user.email === email && user.password === password);

    if (usuario && usuario.email === email && usuario.password === password) {
        // Define a variável de controle para indicar que o usuário está logado
        localStorage.setItem('logado', 'true'); // Ajuste aqui para definir como string 'true'

        // Define o nome da instituição do usuário logado no localStorage
        localStorage.setItem('nomeInstituicaoLogada', usuario.nomeInstituicao);

        Swal.fire({
            title: 'Sucesso!',
            text: 'Login efetuado com sucesso.',
            icon: 'success',
            confirmButtonText: 'OK',
            customClass: {
                confirmButton: "btn btn-success",
            },
            buttonsStyling: false
        }).then(() => {
            setTimeout(() => {
                window.location.href = "../../index.html"; // Substitua pelo URL da sua página principal
            }, 2000);
        });
    } else {
        Swal.fire({
            title: "Erro!",
            text: "Email ou senha inválido!",
            icon: "error",
            customClass: {
                confirmButton: "btn btn-danger",
            },
            buttonsStyling: false
        });
    }
}
