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
    mostrarEsconderSenha.src = 'Imagens/mostrar.png';
    mostrarEsconderSenha.alt = 'Mostrar senha';
  } else {
    inputSenha.type = 'password';
    mostrarEsconderSenha.src = 'Imagens/esconder.png';
    mostrarEsconderSenha.alt = 'Esconder senha';
  }
});

const rewritePasswordInput = document.getElementById('rewrite-password');
const rewritePasswordToggle = document.getElementById('rewrite-password-toggle');

rewritePasswordToggle.addEventListener('click', function() {
  if (rewritePasswordInput.type === 'password') {
    rewritePasswordInput.type = 'text';
    rewritePasswordToggle.src = 'Imagens/mostrar.png';
  } else {
    rewritePasswordInput.type = 'password';
    rewritePasswordToggle.src = 'Imagens/esconder.png';
  }
});

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Impede o envio do formulário

  // Obtenha os valores dos campos do formulário
  const email = form.email.value;
  const password = form.password.value;
  const rewrite_senha = form.rewrite_senha.value;
  const nome = form.nome.value;
  const sobrenome = form.sobrenome.value;

  if (!email || !password) {
      alert('Por favor, preencha todos os campos');
      return;
    }

  // Envia a solicitação para o arquivo PHP
  const response = await fetch('cadastro.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `nome=${encodeURIComponent(nome)}&sobrenome=${encodeURIComponent(sobrenome)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}&rewrite_senha=${encodeURIComponent(rewrite_senha)}`
  });

  // Verifica a resposta do servidor
  const data = await response.json();
  if (data.status === 'error') {
    alert(data.message); // Exibe a mensagem de erro em uma caixa de diálogo  
  } else if (data.status === 'success') {
    window.location.pathname = 'Cadastro_2_Informacoes/Informacoes.html';
  }
});