<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Verifica se a requisição é do tipo POST

  $interesses = $_POST['interesses']; // Obtém os interesses selecionados do formulário

  // Define os dados que serão enviados para o SheetMonkey
  $dados = array(
    'interesses' => implode(', ', $interesses) // Converte os interesses em uma string separada por vírgulas
  );

  // Define a URL do endpoint do SheetMonkey para enviar os dados
  $url = 'https://api.sheetmonkey.io/form/99SJCCHSNEzVETRfX84pNP'; // Substitua pelo URL correto do SheetMonkey

  // Inicia a requisição cURL
  $curl = curl_init($url);

  // Configura as opções da requisição cURL
  curl_setopt($curl, CURLOPT_POST, true);
  curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($dados));
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

  // Executa a requisição cURL
  $resultado = curl_exec($curl);

  // Verifica se houve algum erro na requisição
  if ($resultado === false) {
    echo 'Erro ao enviar os dados para o SheetMonkey: ' . curl_error($curl);
  } else {
    echo 'Dados enviados com sucesso para o SheetMonkey!';
  }

  // Fecha a requisição cURL
  curl_close($curl);
} else {
  echo 'Método de requisição inválido.';
}
?>
