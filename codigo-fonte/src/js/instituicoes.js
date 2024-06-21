// função para mostrar as instutições como cards dinâmicos
document.addEventListener("DOMContentLoaded", function () {
    const estadoSelect = document.getElementById('estado');
    const cidadeInput = document.getElementById('cidade'); // Mudança de Select para Input
    const categoriaSelect = document.getElementById('categoria');
    let cards = []; // Armazenar os cards gerados

    // Função para filtrar os cards
    function filterCards() {
        const selectedEstado = estadoSelect.value.trim().toLowerCase();
        const selectedCidade = cidadeInput.value.trim().toLowerCase();
        const selectedCategoria = categoriaSelect.value.trim().toLowerCase();

        console.log(`Estado selecionado: ${selectedEstado}`);
        console.log(`Cidade selecionada: ${selectedCidade}`);
        console.log(`Categoria selecionada: ${selectedCategoria}`);

        cards.forEach(card => {
            const cardEstado = card.getAttribute('data-estado').trim().toLowerCase();
            const cardCidade = card.getAttribute('data-cidade').trim().toLowerCase();
            const cardCategoria = card.getAttribute('data-categoria').trim().toLowerCase();

            console.log(`Card: Estado: ${cardEstado}, Cidade: ${cardCidade}, Categoria: ${cardCategoria}`);

            // Condição para verificar se os filtros se aplicam ao card
            const estadoMatch = selectedEstado === '' || selectedEstado === cardEstado;
            const cidadeMatch = selectedCidade === '' || cardCidade.includes(selectedCidade);
            const categoriaMatch = selectedCategoria === '' || selectedCategoria === cardCategoria;

            if (estadoMatch && cidadeMatch && categoriaMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Adiciona evento de mudança aos filtros
    estadoSelect.addEventListener('change', filterCards);
    cidadeInput.addEventListener('input', filterCards); // Alterado para 'input'
    categoriaSelect.addEventListener('change', filterCards);

    // Função para mostrar os cards (adição para pegar os cards gerados)
    function getCards() {
        cards = document.querySelectorAll('.cardONG');
    }

    // Chama a função para pegar os cards após carregamento da página
    window.addEventListener('load', getCards);
});



function showModal(button) {
    const card = button.closest('.cardONG');

    const nome = card.getAttribute('data-nome');
    const descricao = card.getAttribute('data-descricao');
    const missao = card.getAttribute('data-missao');
    const contato = card.getAttribute('data-contato');
    const endereco = card.getAttribute('data-endereco');
    const imgSrc = card.querySelector('img').getAttribute('src');

    document.getElementById('modal-nome').textContent = nome;
    document.getElementById('modal-descricao').textContent = descricao;
    document.getElementById('modal-missao').textContent = missao;
    document.getElementById('modal-contato').textContent = contato;
    document.getElementById('modal-endereco').textContent = endereco;
    document.getElementById('modal-img').setAttribute('src', imgSrc);
}


// Função para gerar os cards das instituições
document.addEventListener('DOMContentLoaded', () => {
    const usuariosJson = localStorage.getItem('usuarios');
    const usuarios = JSON.parse(usuariosJson);

    // Função para gerar o HTML dos cards
    function gerarCards() {
        const container = document.getElementById('listaCards');
        container.innerHTML = '';

        const row = document.createElement('div');
        row.classList.add('row', 'justify-content-center');

        usuarios.forEach((instituicao, index) => {
            const modalId = `infoModal${index}`; // Criando um id único para cada modal
            const cardHTML = `
                <div class="cardONG box-shadow col-sm-5" style="width: 1200px;" data-categoria="${instituicao.categorias}" data-estado="${instituicao.estado}" data-cidade="${instituicao.cidade}">
                    <img class="card-img-top" width="300" height="300" id="image-showed" src="${instituicao.image}" alt="Imagem da instituição">
                    <div class="card-body">
                        <h5 class="card-title">${instituicao.nomeInstituicao}</h5>
                        <p class="card-text">${instituicao.descricao}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary" data-toggle="modal" data-target="#${modalId}" onclick="showModal(this)">Saiba mais</button>
                            </div>
                        </div>
                    </div>
                    <!-- Modal -->
                    <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="${modalId}Label"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="${modalId}Label">Detalhes da Instituição</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <!-- Conteúdo será inserido dinamicamente -->
                                    <h5 id="modal-nome"></h5>
                                    <p><strong>Descrição:</strong> ${instituicao.descricao} <span id="modal-descricao"></span></p>
                                    <p><strong>Missão:</strong> ${instituicao.categorias.toString().trim()}<span id="modal-missao"></span></p>
                                    <p><strong>Contato:</strong> ${instituicao.telefone + ' - ' + instituicao.celular} <span id="modal-contato"></span></p>
                                    <p><strong>Email:</strong> ${instituicao.email} <span id="modal-email"></span></p>
                                    <p><strong>Endereço:</strong> <a href="https://www.google.com/maps/search/${encodeURIComponent(instituicao.rua + ', ' + instituicao.bairro + ', ' + instituicao.cidade + ', ' + instituicao.estado)}" target="_blank">${instituicao.rua + ', ' + instituicao.bairro + ', ' + instituicao.cidade + ' / ' + instituicao.estado}</a></p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            row.insertAdjacentHTML('beforeend', cardHTML);
        });
        container.appendChild(row);
    }

    gerarCards();
});
