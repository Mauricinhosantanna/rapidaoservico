<?php
// Formulário "Fale com a gente" do site do Rapidão (versão estática, Hostinger).
// Recebe JSON do site e envia por e-mail. Troque DESTINO pelo e-mail que
// deve receber as mensagens.

const DESTINO = 'contato@rapidaoservico.com.br';
const REMETENTE = 'nao-responda@rapidaoservico.com.br';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function responder(array $corpo, int $status = 200): void {
    http_response_code($status);
    echo json_encode($corpo, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    responder(['error' => 'Método não aceito.'], 405);
}

$bruto = file_get_contents('php://input', false, null, 0, 20000);
$dados = json_decode($bruto ?: '', true);
if (!is_array($dados)) {
    responder(['error' => 'Pedido inválido.'], 400);
}

$campo = function (string $nome, int $max) use ($dados): string {
    $valor = isset($dados[$nome]) && is_string($dados[$nome]) ? trim($dados[$nome]) : '';
    // Sem quebra de linha nos campos curtos: impede injeção de cabeçalho.
    return mb_substr($valor, 0, $max);
};

// Armadilha para robôs: o campo escondido veio preenchido.
if ($campo('website', 200) !== '') {
    responder(['ok' => true, 'message' => 'Recebemos sua mensagem. Em breve entraremos em contato.']);
}

$nome = preg_replace('/[\r\n]+/', ' ', $campo('name', 120));
$email = preg_replace('/[\r\n]+/', '', $campo('email', 160));
$telefone = preg_replace('/[\r\n]+/', ' ', $campo('phone', 40));
$assunto = preg_replace('/[\r\n]+/', ' ', $campo('subject', 160));
$mensagem = $campo('message', 5000);

$erros = [];
if (mb_strlen($nome) < 2) $erros['name'] = 'Informe seu nome.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $erros['email'] = 'Informe um e-mail válido.';
if (mb_strlen($assunto) < 2) $erros['subject'] = 'Informe um assunto.';
if (mb_strlen($mensagem) < 5) $erros['message'] = 'Escreva sua mensagem.';
if ($erros) {
    responder(['errors' => $erros], 422);
}

// Limite simples: uma mensagem por endereço a cada 30 segundos.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'desconhecido';
$marca = sys_get_temp_dir() . '/rapidao_contato_' . md5($ip);
if (is_file($marca) && time() - filemtime($marca) < 30) {
    responder(['error' => 'Aguarde alguns segundos antes de enviar de novo.'], 429);
}
@touch($marca);

$corpo = "Nova mensagem pelo site rapidaoservico.com.br\n\n"
    . "Nome: $nome\n"
    . "E-mail: $email\n"
    . ($telefone !== '' ? "Telefone: $telefone\n" : '')
    . "Assunto: $assunto\n\n"
    . $mensagem . "\n";

$cabecalhos = [
    'From: Site Rapidão <' . REMETENTE . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
];
$tituloCodificado = '=?UTF-8?B?' . base64_encode('Site: ' . $assunto) . '?=';

if (!mail(DESTINO, $tituloCodificado, $corpo, implode("\r\n", $cabecalhos))) {
    responder(['error' => 'Não foi possível enviar agora.'], 500);
}

responder(['ok' => true, 'message' => 'Recebemos sua mensagem. Em breve entraremos em contato.']);
