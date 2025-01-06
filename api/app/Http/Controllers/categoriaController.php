<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class categoriaController extends Controller
{
    public function criarCategoria(Request $request){
        $categoria = new Categoria;
        $categoria->nome_categoria = $request->nome_categoria;
        $categoria->imagem_categoria = $request->imagem_categoria;

        $categoria->save();

        return response()->json([
            'categoria Adicionada'
        ],201);
    }

    public function getCategorias(){
        $categorias = Categoria::all();

        return response()->json($categorias);
    }
}
