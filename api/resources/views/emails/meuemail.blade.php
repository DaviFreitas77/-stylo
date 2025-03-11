<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>
</head>

<body>
    <h1>Olá, {{ $dados['nome'] }}!</h1>
    <p>este é seu codigo para confirmar seu email {{ $dados['mensagem'] }}</p>
</body>

</html>