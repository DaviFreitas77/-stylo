<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use App\Models\ProdutoDestaque;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class produtoController extends Controller
{
    public function criarProduto(Request $request){
        $produto = new Produto;
        $produto->nome_produto = $request->nome_produto;
        $produto->desc_produto = $request->desc_produto;
        $produto->preco_produto = $request->preco_produto;
        $produto->imagem_produto = $request->imagem_produto;
        $produto->cor_produto = $request->cor_produto;
        $produto->fk_subCategoria = $request->fk_subCategoria;
        $produto->destaque = $request->destaque;  
        $produto->destaque_estacao = $request->destaque_estacao;
    
        $produto->save();
        
        if($request->destaque){

            DB::table('tb_produto_destaque')->insert([
                'fk_produto' => $produto->id_produto,
              
            ]);
           

        }
       
       
    
        return response()->json([
            'message' => 'Produto Cadastrado com sucesso'
        ],201);
    
    }

public function getProduto(){
    $produto = Produto::all();

    return response()->json($produto);
}
    
}
