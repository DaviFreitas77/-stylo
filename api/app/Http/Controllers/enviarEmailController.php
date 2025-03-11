<?php

namespace App\Http\Controllers;

use App\Mail\MeuEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EnviarEmailController extends Controller
{
    public function enviar($mensagem, $nome, $email)
    {
        $dados = [
            'nome' => $nome,
            'mensagem' => $mensagem,
        ];

        Mail::to($email)->send(new MeuEmail($dados));

        return 'E-mail enviado com sucesso!';
    }
}
