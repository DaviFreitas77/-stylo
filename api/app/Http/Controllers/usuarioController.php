<?php

namespace App\Http\Controllers;

use App\Mail\EmailVerificationMail;
use App\Models\ADM;
use App\Models\Usuario;
use App\Models\VerificarEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class usuarioController extends Controller
{
    public function criarUsuario(Request $request)
    {

        $validated = $request->validate([
            'email_usuario' => ['required', 'string'],
            'cpf_usuario' => ['required', 'string', 'max:14', 'min:14'],
            'nome_usuario' => ['required', 'string', 'max:20'],
            'numero_usuario' => ['required', 'string', 'max:15'],
            'senha_usuario' => ['required', 'string', 'min:6'],
        ], [
            'email_usuario.required' => 'O e-mail é obrigatório.',
            
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

        if (Usuario::where('cpf_usuario', $request->cpf_usuario)->exists()) {
            return response()->json(['message' => 'CPF já cadastrado'], 401);
        }

        if (Usuario::where('email_usuario', $request->email_usuario)->exists()) {
            return response()->json(['message' => 'E-mail já cadastrado'], 401);
        }

        if (Usuario::where('numero_usuario', $request->numero_usuario)->exists()) {
            return response()->json(['message' => 'Número já cadastrado'], 401);
        }



        $usuario = new Usuario;
        $usuario->cpf_usuario = $request->cpf_usuario;
        $usuario->nome_usuario = $request->nome_usuario;
        $usuario->email_usuario = $request->email_usuario;
        $usuario->numero_usuario = $request->numero_usuario;
        $usuario->senha_usuario = Hash::make($request->senha_usuario);
        $usuario->save();
        return response()->json(['message' => 'Usuário criado com sucesso!'], 201);
    }


    public function login(Request $request)
    {


        $validated = $request->validate([
            'cpf' => ['required']
        ], [
            'cpf_usuario.required' => 'O CPF é obrigatório.',
        ]);

        $usuario = Usuario::where('cpf_usuario', $request->cpf)->first();
        $adm = ADM::where('cpf_adm', $request->cpf)->first();

        if ($usuario && Hash::check($request->senha, $usuario->senha_usuario)) {
           
            return response()->json([
                'message' => 'usuario',
                $usuario
            ], 200);
        } 

        if ($adm && $request->senha === $adm->senha_adm) {
            $token = $adm->createToken('admToken')->plainTextToken;
            return response()->json([
                'message' => 'adm',
                'adm' => $adm,
                'token' => $token
            ], 201);
        }

        return response()->json([
            'message' => 'Credenciais inválidas.'
        ], 401);
    }
}
