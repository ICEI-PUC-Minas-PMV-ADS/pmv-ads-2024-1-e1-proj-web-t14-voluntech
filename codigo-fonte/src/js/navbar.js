// Função para verificar e atualizar o link de entrar/sair
function atualizarLinkEntrarSair() {
    var linkEntrarSair = document.getElementById('linkEntrarSair');
    if (localStorage.getItem('logado') === 'true') {
      // Se o usuário estiver logado, altera o href para a página de logout
      linkEntrarSair.href = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t14-voluntech/'; // Atualize para o link de logout correto
      // Altera o texto do link para "Sair"
      linkEntrarSair.innerText = 'Sair';
    } else {
      // Se o usuário não estiver logado, mantém o href para a página de login
      linkEntrarSair.href = 'https://icei-puc-minas-pmv-ads.github.io/pmv-ads-2024-1-e1-proj-web-t14-voluntech/codigo-fonte/src/login.html';
      // Mantém o texto do link como "Entrar"
      linkEntrarSair.innerText = 'Entrar';
    }
  
    // Adiciona um evento de clique ao link
    linkEntrarSair.addEventListener('click', function() {
      if (localStorage.getItem('logado') === 'true') {
        // Se o usuário estiver logado ao clicar em "Sair", define o localStorage como falso
        localStorage.setItem('logado', 'false');
        localStorage.setItem('nomeInstituicaoLogada', '');
      }
    });
}
  
// Chama a função para atualizar o link de entrar/sair quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    atualizarLinkEntrarSair();
});
