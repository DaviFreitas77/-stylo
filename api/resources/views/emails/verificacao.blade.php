<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verificação de E-mail</title>
</head>
<body>
    <h1>Verifique seu E-mail</h1>
    <p>Clique no link abaixo para confirmar seu e-mail:</p>
    <a href="{{ url('/verificar-email/'.$token) }}">Confirmar E-mail</a>
</body>
</html>
