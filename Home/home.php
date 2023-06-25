<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $comentario2 = $_POST['comentario2'];
  $comentario3 = $_POST['comentario3'];

  // Dados para enviar para a planilha
  $sheetData = array(
    'comentario2' => $comentario2,
    'comentario3' => $comentario3
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
