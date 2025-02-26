<?php

namespace App\Http\Controllers;

use App\Models\Favorito;
use Illuminate\Http\Request;

class favoritoContrller extends Controller
{
    public function addFavorito(Request $request)
    {
        $id_usuario = $request->id_usuario;
        $id_produto = $request->id_produto;


        $itemExistente = Favorito::where('fk_produto',$id_produto)->first();

        if($itemExistente){
            return response()->json([
                'message'=> 'este produto ja esta salvo em favoritos'
            ],401);
        }

        if ($id_usuario && $id_produto) {
            $favorito = new Favorito;
            $favorito->fk_usuario = $id_usuario;
            $favorito->fk_produto = $id_produto;
            $favorito->save();
            return response()->json([
                'produto favoritado'
            ]);
        };
    }


    public function getFavorito(Request $request)
    {
        $id_usuario = $request->id_usuario;
        $favoritos = Favorito::where('fk_usuario', $id_usuario)
            ->join('tb_produto', 'tb_favorito.fk_produto', '=', 'tb_produto.id_produto')
            ->select('tb_produto.nome_produto', 'tb_produto.imagem_produto', 'tb_produto.preco_produto', 'tb_produto.id_produto')
            ->get();



        return response()->json($favoritos);
    }
}
