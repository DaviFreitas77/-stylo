<?php

namespace App\Http\Controllers;

use App\Models\Carrinho;
use App\Models\CarrinhoItens;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class carrinhoController extends Controller


{
    public function addCarrinho(Request $request)
    {

        $itemExiste = CarrinhoItens::where('fk_produto', $request->id_produto)
            ->where('fk_carrinho', $request->id_carrinho)
            ->first();


        if ($itemExiste) {
            DB::table('tb_carrinho_itens')->update([
                'quantidade' => $request->quantidade
            ]);
            $itemExiste->quantidade += $request->quantidade;
            $itemExiste->save();

            return response()->json([
                'message' => 'Quantidade atualizada no carrinho',
                'quantidade' => $itemExiste->quantidade,
            ]);
        }


        $item = new CarrinhoItens;
        $item->fk_produto = $request->id_produto;
        $item->fk_carrinho = $request->id_carrinho;
        $item->quantidade = $request->quantidade;
        $item->save();

        return response()->json([
            'message' => 'Item adicionado ao carrinho',
            'quantidade' => $item->quantidade,
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
        } else {
            $item = CarrinhoItens::where('fk_carrinho', $carrinho->id_carrinho)
                ->join('tb_produto', 'tb_carrinho_itens.fk_produto', '=', 'tb_produto.id_produto')
                ->join('tb_relacao_tamanho', 'tb_produto.id_produto', '=', 'tb_relacao_tamanho.fk_item')
                ->join('tb_tamanho', 'tb_relacao_tamanho.fk_tamanho', '=', 'tb_tamanho.id_tamanho')
                ->join('tb_relacao_cor', 'tb_produto.id_produto', '=', 'tb_relacao_cor.fk_item')
                ->join('tb_cor', 'tb_relacao_cor.fk_cor', '=', 'tb_cor.id_cor')
                ->select('id_produto', 'tb_produto.nome_produto', 'imagem_produto', 'preco_produto', 'tb_tamanho.desc_tamanho', 'tb_cor.desc_cor', 'quantidade')
                ->get();
            return response()->json([
                'itens' => $item,
                'carrinho' => $carrinho
            ]);
        }
    }
}
