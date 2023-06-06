<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recupere os dados enviados pelo formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];

    // Faça o processamento necessário com os dados

    // Exemplo de exibição dos dados enviados
    echo "Nome: " . $nome . "<br>";
    echo "Email: " . $email;
}
?>
