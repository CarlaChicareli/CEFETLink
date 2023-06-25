// Obtém uma referência ao elemento de envio
const enviarIcon1 = document.querySelector('.adicionar_comentario1 .adicionar_button1');
const enviarIcon2 = document.querySelector('.adicionar_comentario2 .adicionar_button2');
const enviarIcon3 = document.querySelector('.adicionar_comentario3 .adicionar_button3');

// Adiciona um evento de clique ao ícone de envio
enviarIcon1.addEventListener('click', enviarComentario1);
enviarIcon2.addEventListener('click', enviarComentario2);
enviarIcon3.addEventListener('click', enviarComentario3);

// Função para enviar o comentário para a planilha
function enviarComentario1() {
    // Obtém o valor do campo de comentário
    const comentarioInput1 = document.querySelector('.comentario-input1');
    const comentario1 = comentarioInput1.value;
  
    // Verifica se o campo de comentário está vazio
    if (!comentario1) {
      alert('Por favor, adicione um comentário');
      return;
    }
  
    // Dados para enviar para a planilha
    const sheetData = {
      comentario1: comentario1
    };
  
    // URL da API do Sheet Monkey
    const apiUrl = 'https://api.sheetmonkey.io/form/99SJCCHSNEzVETRfX84pNP';
  
    // Configuração da requisição
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {99SJCCHSNEzVETRfX84pNP}' // Substitua pelo seu token de autenticação
      },
      body: JSON.stringify(sheetData)
    };
  
    // Envia a solicitação para a API do Sheet Monkey
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          alert('Comentário enviado com sucesso!');
          // Limpa o campo de comentário
          comentarioInput1.value = '';
        } else {
          alert('Erro ao enviar o comentário. Por favor, tente novamente mais tarde.');
        }
      })
      
  }

  // Função para enviar o comentário para a planilha
function enviarComentario2() {
    // Obtém o valor do campo de comentário
    const comentarioInput2 = document.querySelector('.comentario-input2');
    const comentario2 = comentarioInput2.value;
  
    // Verifica se o campo de comentário está vazio
    if (!comentario2) {
      alert('Por favor, adicione um comentário');
      return;
    }
  
    // Dados para enviar para a planilha
    const sheetData = {
      comentario2: comentario2
    };
  
    // URL da API do Sheet Monkey
    const apiUrl = 'https://api.sheetmonkey.io/form/99SJCCHSNEzVETRfX84pNP';
  
    // Configuração da requisição
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer {99SJCCHSNEzVETRfX84pNP}' // Substitua pelo seu token de autenticação
      },
      body: JSON.stringify(sheetData)
    };
  
    // Envia a solicitação para a API do Sheet Monkey
    fetch(apiUrl, requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          alert('Comentário enviado com sucesso!');
          // Limpa o campo de comentário
          comentarioInput2.value = '';
        } else {
          alert('Erro ao enviar o comentário. Por favor, tente novamente mais tarde.');
        }
      })
      
}
// Função para enviar o comentário para a planilha
function enviarComentario3() {
  // Obtém o valor do campo de comentário
  const comentarioInput3 = document.querySelector('.comentario-input3');
  const comentario3 = comentarioInput3.value;

  // Verifica se o campo de comentário está vazio
  if (!comentario3) {
    alert('Por favor, adicione um comentário');
    return;
  }

  // Dados para enviar para a planilha
  const sheetData = {
    comentario: comentario3
  };

  // URL da API do Sheet Monkey
  const apiUrl = 'https://api.sheetmonkey.io/form/99SJCCHSNEzVETRfX84pNP';

  // Configuração da requisição
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer {99SJCCHSNEzVETRfX84pNP}' // Substitua pelo seu token de autenticação
    },
    body: JSON.stringify(sheetData)
  };

  // Envia a solicitação para a API do Sheet Monkey
  fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Comentário enviado com sucesso!');
        // Limpa o campo de comentário
        comentarioInput3.value = '';
      } else {
        alert('Erro ao enviar o comentário. Por favor, tente novamente mais tarde.');
      }
    })
    
}

// Obtém todas as imagens de aplausos
const aplausosIcons = document.querySelectorAll('.conteudo-icons-aplausos');

// Adiciona um evento de clique a todas as imagens de aplausos
aplausosIcons.forEach(aplausosIcon => {
  aplausosIcon.addEventListener('click', function() {
    if (this.classList.contains('aplausos-ativo')) {
      // Volta ao estado inicial (imagem estática) quando o usuário clicar novamente
      this.src = 'Assets/Icons/palmas1.png';
      this.style.width = '47px';
      this.style.height = '47px';
      this.classList.remove('aplausos-ativo');
    } else {
      // Inicia o GIF quando o usuário clicar pela primeira vez
      this.src = 'Assets/Icons/palmas1.gif';
      this.style.width = '47px';
      this.style.height = '47px';
      this.classList.add('aplausos-ativo');
    }
  });
});

