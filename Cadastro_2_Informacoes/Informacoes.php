<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $campus = $_POST['campus'];
  $curso = $_POST['curso'];
  $turma = $_POST['turma'];
  $ano = $_POST['ano'];

  // Verifica se os dados da primeira etapa estão armazenados na sessão
  if (isset($_SESSION['cadastro_step1'])) {
    // Recupera os dados da primeira etapa
    $step1Data = $_SESSION['cadastro_step1'];

    // Combina os dados da primeira etapa com os dados da segunda etapa
    $combinedData = array_merge($step1Data, $_POST); // Combina os arrays dos dados da primeira etapa e da segunda etapa

    // Dados para enviar para a planilha
    $sheetData = array(
      'Nome' => $combinedData['nome'],
      'Sobrenome' => $combinedData['sobrenome'],
      'Email' => $combinedData['email'],
      'Senha' => $combinedData['password'],
      'Campus' => $campus,
      'Curso' => $curso,
      'Turma' => $turma,
      'Ano' => $ano
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
  } else {
    // Os dados da primeira etapa não estão disponíveis
    // Trate isso como um erro ou redirecione o usuário para recomeçar o processo de cadastro
    $response = array(
      'status' => 'error',
      'message' => 'Os dados da primeira etapa estão faltando'
    );
    echo json_encode($response);
    return;
  }
}
?>
