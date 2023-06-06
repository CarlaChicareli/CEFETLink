<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $sobrenome = $_POST["sobrenome"];
    $senha = $_POST["senha"];

    // Dados do formulário
    $dados = [
        "nome" => $nome,
        "sobrenome" => $sobrenome,
        "senha" => $senha
    ];

    // Convertendo os dados em formato JSON
    $jsonDados = json_encode($dados);

    // URL da API do Sheet Monkey
    $url = "https://api.sheetmonkey.io/form/jbLggddHYE2eSSwWMGTx5h";

    // Defina o ID da planilha e o nome da planilha corretamente nas chaves {spreadsheet_id} e {sheet_name} acima.

    // Configuração da solicitação
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Content-Type: application/json",
        "Authorization: Bearer {api_key}"
    ]);

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDados);

    // Executando a solicitação
    $response = curl_exec($ch);
    curl_close($ch);

    // Verificando a resposta
    if ($response) {
        echo "Dados gravados com sucesso na planilha.";
    } else {
        echo "Ocorreu um erro ao gravar os dados na planilha.";
    }
}
?>
