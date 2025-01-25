<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class pesquisaController extends Controller
{
    public function pesquisa(Request $request){
        $nome_produto = $request->query('pesquisa_produto');
        $query = Produto::where('nome_produto', 'like', $nome_produto . '%')
        ->select('id_produto','nome_produto', 'preco_produto', 'imagem_produto')
        ->get();
        

        return response()->json($query);

    }
}
