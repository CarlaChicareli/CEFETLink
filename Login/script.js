const loginBar = document.querySelector('.login-bar');

loginBar.addEventListener('mouseover', () => {
loginBar.classList.add('slide');
});

loginBar.addEventListener('mouseout', () => {
loginBar.classList.remove('slide');
});

  const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede o envio do formulário

    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
        alert('Por favor, preencha todos os campos');
        return;
      }

    // Envia a solicitação para o arquivo PHP
    const response = await fetch('login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    });

    // Verifica a resposta do servidor
    const data = await response.json();
    if (data.status === 'error') {
      alert(data.message); // Exibe a mensagem de erro em uma caixa de diálogo
    } else if (data.status === 'success') {
      // Código adicional para o caso de login bem-sucedido
      // ...
    }
  });