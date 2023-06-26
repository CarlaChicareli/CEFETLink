// Obtém o botão de seguir
const buttonSeguir = document.querySelector('.button_seguir');

// Define a variável de estado inicial
let seguindo = false;

// Adiciona um evento de clique ao botão de seguir
buttonSeguir.addEventListener('click', function() {
    // Alterna o estado do botão
    seguindo = !seguindo;

    // Atualiza a aparência do botão com base no estado
    if (seguindo) {
        buttonSeguir.style.backgroundColor = '#51A5FF';
        buttonSeguir.textContent = 'Seguindo';
    } else {
        buttonSeguir.style.backgroundColor = ''; // volta à cor original
        buttonSeguir.textContent = 'Seguir';
    }
});