const loginBar = document.querySelector('.login-bar');

loginBar.addEventListener('mouseover', () => {
loginBar.classList.add('slide');
});

loginBar.addEventListener('mouseout', () => {
loginBar.classList.remove('slide');
});
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password-input");
    var showPasswordButton = document.getElementById("show-password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.textContent = "Esconder";
    } else {
      passwordInput.type = "password";
      showPasswordButton.textContent = "Mostrar";
    }
  }

const mostrarEsconderSenha = document.querySelector('.mostrar-esconder-senha');
const inputSenha = document.querySelector('.password-box input[type="password"]');

mostrarEsconderSenha.addEventListener('click', () => {
  if (inputSenha.type === 'password') {
    inputSenha.type = 'text';
    mostrarEsconderSenha.src = 'mostrar.png';
    mostrarEsconderSenha.alt = 'Mostrar senha';
  } else {
    inputSenha.type = 'password';
    mostrarEsconderSenha.src = 'esconder.png';
    mostrarEsconderSenha.alt = 'Esconder senha';
  }
});

const rewritePasswordInput = document.getElementById('rewrite-password');
const rewritePasswordToggle = document.getElementById('rewrite-password-toggle');

rewritePasswordToggle.addEventListener('click', function() {
  if (rewritePasswordInput.type === 'password') {
    rewritePasswordInput.type = 'text';
    rewritePasswordToggle.src = 'mostrar.png';
  } else {
    rewritePasswordInput.type = 'password';
    rewritePasswordToggle.src = 'esconder.png';
  }
});

