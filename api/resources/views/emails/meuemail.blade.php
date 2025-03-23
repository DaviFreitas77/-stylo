<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmação de E-mail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 500px;
            background: #ffffff;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 16px;
            color: #555;
        }
        .codigo {
            font-size: 22px;
            font-weight: bold;
            color: #3498db;
            background: #ecf0f1;
            padding: 10px;
            border-radius: 5px;
            display: inline-block;
            margin: 10px 0;
        }
        .footer {
            font-size: 12px;
            color: #777;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>Olá, {{ $dados['nome'] }}!</h1>
        <p>Seu código de confirmação é:</p>
        <div class="codigo">{{ $dados['mensagem'] }}</div>
        <p>Copie e cole este código para confirmar seu e-mail.</p>
        <div class="footer">
            <p>Se você não solicitou este código, ignore este e-mail.</p>
        </div>
    </div>
</body>

</html>
