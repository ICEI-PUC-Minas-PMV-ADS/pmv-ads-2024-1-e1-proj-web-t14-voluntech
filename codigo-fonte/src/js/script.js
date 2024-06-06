document.addEventListener("DOMContentLoaded", function() {
    const estadoSelect = document.getElementById('estado');
    const cidadeSelect = document.getElementById('cidade');
    const categoriaSelect = document.getElementById('categoria');
    const cards = document.querySelectorAll('.card');
  
    function filterCards() {
        const selectedEstado = estadoSelect.value;
        const selectedCidade = cidadeSelect.value;
        const selectedCategoria = categoriaSelect.value;
  
        console.log(Estado selecionado: ${selectedEstado});
        console.log(Cidade selecionada: ${selectedCidade});
        console.log(Categoria selecionada: ${selectedCategoria});
  
        cards.forEach(card => {
            const cardEstado = card.getAttribute('data-estado');
            const cardCidade = card.getAttribute('data-cidade');
            const cardCategoria = card.getAttribute('data-categoria');
  
            console.log(Card: Estado: ${cardEstado}, Cidade: ${cardCidade}, Categoria: ${cardCategoria});
  
            if (
                (selectedEstado === ''  selectedEstado === cardEstado) &&
                (selectedCidade === ''  selectedCidade === cardCidade) &&
                (selectedCategoria === '' || selectedCategoria === cardCategoria)
            ) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
  
    estadoSelect.addEventListener('change', filterCards);
    cidadeSelect.addEventListener('change', filterCards);
    categoriaSelect.addEventListener('change', filterCards);
  });