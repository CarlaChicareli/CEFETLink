const loginBar = document.querySelector('.login-bar');

loginBar.addEventListener('mouseover', () => {
    loginBar.classList.add('slide');
});

loginBar.addEventListener('mouseout', () => {
    loginBar.classList.remove('slide');
});

// Seleciona todos os botões de interesse
const interestButtons = document.querySelectorAll('.interest-item');

// Adiciona um evento de clique para cada botão de interesse
interestButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Adiciona ou remove a classe "selected" do elemento clicado
        item.classList.toggle('selected');
    });
});

var continuarBtn = document.getElementById("continuar-btn");

continuarBtn.addEventListener("click", function () {
    if (continuarBtn.classList.contains("pressed")) {
        continuarBtn.classList.remove("pressed");
    } else {
        continuarBtn.classList.add("pressed");
    }
});


// adiciona um evento de clique para cada botão
interestButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('pressed'); // adiciona ou remove a classe 'pressed'
    });
});

const modaBtn = document.querySelector('.moda');
let modaPressed = false;

modaBtn.addEventListener('click', () => {
  modaPressed = !modaPressed;
  modaBtn.classList.toggle('pressed', modaPressed);
});


