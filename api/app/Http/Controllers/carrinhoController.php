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
            ->where('fk_cor', $request->id_cor)
            ->where('fk_tamanho', $request->id_tamanho)
            ->where('fk_carrinho', $request->id_carrinho)
            ->first();



        if ($itemExiste) {
            // Atualiza a quantidade se o item já existir
            $itemExiste->quantidade += $request->quantidade;
            $itemExiste->preco_itens = $request->preco_produto * $itemExiste->quantidade;

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
        $item->fk_cor = $request->id_cor;
        $item->fk_tamanho = $request->id_tamanho;
        $item->preco_itens = $request->preco_produto;
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

                ->join('tb_relacao_cor', 'tb_carrinho_itens.fk_cor', '=', 'tb_relacao_cor.id_relacao_cor')

                ->join('tb_cor', 'tb_relacao_cor.fk_cor', '=', 'tb_cor.id_cor')

                ->join('tb_relacao_tamanho', 'tb_carrinho_itens.fk_tamanho', '=', 'tb_relacao_tamanho.id_relacao_tamanho')

                ->join('tb_tamanho', 'tb_relacao_tamanho.fk_tamanho', '=', 'tb_tamanho.id_tamanho')
                ->select('id_produto', 'tb_produto.nome_produto', 'imagem_produto', 'preco_produto', 'quantidade', 'tb_cor.desc_cor', 'tb_carrinho_itens.fk_tamanho', 'id_cor', 'id_tamanho', 'tb_tamanho.desc_tamanho')
                ->get();
            return response()->json([
                'itens' => $item,
                'carrinho' => $carrinho
            ]);
        }
    }
}
