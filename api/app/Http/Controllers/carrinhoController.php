<?php

namespace App\Http\Controllers;

use App\Models\Carrinho;
use App\Models\CarrinhoItens;
use Illuminate\Http\Request;

class carrinhoController extends Controller


{
    public function addCarrinho(Request $request)
    {
        $item = new CarrinhoItens;
        $item->fk_produto = $request->id_produto;
        $item->fk_carrinho = $request->id_carrinho;

        $item->save();

        return response()->json([
            'message' => 'carrinho criado'
        ]);
    }


    public function getCarrinho(Request $request)
    {

        $id_usuario = $request->query('id_usuario');
        $carrinho = Carrinho::where('fk_usuario', $id_usuario)->first();

        if (!$carrinho) {
            $carrinho = new Carrinho;
            $carrinho->fk_usuario = $request->id_usuario;
            $carrinho->save();
            return response()->json($carrinho);
        }else{
            $item = CarrinhoItens::where('fk_carrinho',$carrinho->id_carrinho)
            ->get();
            return response()->json([
                'carrinho' => $carrinho,
                'itens' => $item
            ]);
    
        }

     


    }


    // public function getCarrinhoUsuario(Request $request){
        
    //     $id_usuario = $request->query('id_usuario');

    //     $carrinho = Carrinho::where('fk_usuario',$id_usuario);


    //     $retu
    // }
}
