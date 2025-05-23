<?php

namespace App\Http\Controllers;

use App\Models\Subcategoria;
use Illuminate\Http\Request;

class subCategoriaController extends Controller
{
    public function criarSubCategoria(Request $request){
        $subCategoria = new Subcategoria;
        $subCategoria->nome_subCategoria = $request->nome_subCategoria;
        $subCategoria->fk_categoria = $request->fk_categoria;

        $subCategoria->save();

        return response()->json([
            'subCategoria Adicionada'
        ],201);
    }


    public function getSubCategorias(){
        $subCategoria = Subcategoria::all();

        return response()->json($subCategoria);
    }

  public function getSubCategoria($id_categoria){
    if(!$id_categoria){
        return;
    }

    $subCategorias = Subcategoria::where('fk_categoria',$id_categoria)->get();

    return response()->json($subCategorias);
  }
}
