<?php

namespace App\Http\Controllers;

use App\Mail\EmailVerificationMail;
use App\Models\Usuario;
use App\Models\VerificarEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class usuarioController extends Controller
{
    public function criarUsuario(Request $request)
    {

        $validated = $request->validate([
            'email_usuario' => ['required', 'string', 'unique:tb_usuario,email_usuario'],
            'cpf_usuario' => ['required', 'string', 'max:14', 'min:14'],
            'nome_usuario' => ['required', 'string', 'max:20'],
            'numero_usuario' => ['required', 'string', 'max:15'],
            'senha_usuario' => ['required', 'string', 'min:6'],
        ], [
            'email_usuario.required' => 'O e-mail é obrigatório.',
            'email_usuario.unique' => 'Este e-mail já está cadastrado.',

            'cpf_usuario.required' => 'O CPF é obrigatório.',
            'cpf_usuario.max' => 'O CPF deve ter no máximo 14 caracteres.',
            'cpf_usuario.min' => 'O CPF deve ter exatamente 14 caracteres.',

            'nome_usuario.required' => 'O nome é obrigatório.',
            'nome_usuario.max' => 'O nome deve ter no máximo 20 caracteres.',

            'numero_usuario.required' => 'O número de telefone é obrigatório.',
            'numero_usuario.max' => 'O número de telefone deve ter no máximo 15 caracteres.',

            'senha_usuario.required' => 'A senha é obrigatória.',
            'senha_usuario.min' => 'A senha deve ter pelo menos 6 caracteres.',
        ]);

        $usuario = new Usuario;
        $usuario->cpf_usuario = $request->cpf_usuario;
        $usuario->nome_usuario = $request->nome_usuario;
        $usuario->email_usuario = $request->email_usuario;
        $usuario->numero_usuario = $request->numero_usuario;
        $usuario->senha_usuario = $request->senha_usuario;

        $usuario->save();
        return response()->json(['message' => 'Usuário criado com sucesso!'], 201);

        // $token = rand(100000, 999999);

        // $verificar = new VerificarEmail;
        // $verificar->id_usuario = $usuario->id_usuario;
        // $verificar->token = $token;
        // $verificar->save();

        // Mail::to($usuario->email_usuario)->send(new EmailVerificationMail($token));  

    }

    public function login(Request $request)
    {
        $usuario = Usuario::where('cpf_usuario', $request->cpf_usuario)->first();

        if ($usuario && $request->senha_usuario === $usuario->senha_usuario) {
            return response()->json([
                'message' => 'Login como usuário bem-sucedido.',
                $usuario
            ], 200);
        }

        return response()->json([
            'message' => 'Credenciais inválidas.'
        ], 401);
    }
}
