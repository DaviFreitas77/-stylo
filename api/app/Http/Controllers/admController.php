<?php

namespace App\Http\Controllers;

use App\Models\ADM;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class admController extends Controller
{
    public function criarAdm(Request $request)
    {

        $validated = $request->validate([
            'nome' => ['required', 'string'],
            'cpf' => ['required', 'string', 'max:14'],
            'senha' => ['required', 'min:8']
        ]);

        $adm = new ADM;
        $adm->nome_adm = $request->nome;
        $adm->cpf_adm = $request->cpf;
        $adm->senha_adm = Hash::make($request->senha);

        $adm->save();
        return response()->json(['message' => 'adm cadastrado'], 201);
    }
}
