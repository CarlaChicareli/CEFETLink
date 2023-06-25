<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];
  $nome = $_POST['nome'];
  $sobrenome = $_POST['sobrenome'];
  $rewritePassword = $_POST['rewrite_senha'];

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

  // Verifica se a senha e sua reescrita são iguais
  if ($password !== $rewritePassword) {
    $response = array(
      'status' => 'error',
      'message' => 'As senhas devem ser iguais'
    );
    echo json_encode($response);
    return;
  }

  // Login bem-sucedido

  // Armazena os dados temporariamente na sessão
  $_SESSION['cadastro_step1'] = $_POST;

  // Retorna uma resposta para o cliente (por exemplo, um JSON com uma mensagem de sucesso)
  $response = array(
    'status' => 'success',
    'message' => 'Primeira etapa concluída com sucesso'
  );
  echo json_encode($response);

  exit();
}
?>
