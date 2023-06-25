const form = document.querySelector('form');
const checkbox = document.querySelector('#checkbox1');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Impede o envio do formulário

  if (!checkbox.checked) {
    alert('Você precisa aceitar os termos e condições.'); // Exibe uma mensagem de alerta se os termos e condições não forem aceitos
    return;
  }

  // Obtenha os valores dos campos do formulário
  const campus = form.campus.value;
  const curso = form.curso.value;
  const turma = form.turma.value;
  const ano = form.ano.value;

  // Envia a solicitação para o arquivo PHP
  const response = await fetch('Informacoes.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `campus=${encodeURIComponent(campus)}&curso=${encodeURIComponent(curso)}&turma=${encodeURIComponent(turma)}&ano=${encodeURIComponent(ano)}`
  });

  // Verifica a resposta do servidor
  const data = await response.json();
  if (data.status === 'error') {
    alert(data.message); // Exibe a mensagem de erro em uma caixa de diálogo
  } else if (data.status === 'success') {
    window.location.pathname = 'Cadastro_3_interesses/Interesses.html';
  }
});
