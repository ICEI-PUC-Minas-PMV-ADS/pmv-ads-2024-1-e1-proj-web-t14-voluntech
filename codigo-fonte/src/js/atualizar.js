// atualizar o cadastro quando o usuário estiver logado
function atualizar() {
  const nomeInstituicaoLogada = localStorage.getItem('nomeInstituicaoLogada');
  if (nomeInstituicaoLogada) {
    const nomeInstituicao = document.querySelector('#nomeInstituicao');
    nomeInstituicao.textContent = nomeInstituicaoLogada;
  }
}

atualizar();