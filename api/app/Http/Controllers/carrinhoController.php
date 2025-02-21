<?php

namespace App\Http\Controllers;

use App\Models\Carrinho;
use App\Models\CarrinhoItens;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use function Pest\Laravel\delete;

class carrinhoController extends Controller


{
    public function addCarrinho(Request $request)
    {
        $id_usuario = $request->id_usuario;

        // Verifica se já existe um carrinho para o usuário
        $carrinho = Carrinho::where('fk_usuario', $id_usuario)->first();

        // Se o carrinho não existe, cria um novo
        if (!$carrinho) {
            $carrinho = new Carrinho;
            $carrinho->fk_usuario = $id_usuario;
            $carrinho->total_carrinho = 0.00;
            $carrinho->save();
        }

        // Agora que o carrinho existe, podemos adicionar ou atualizar o item
        $itemExiste = CarrinhoItens::where('fk_produto', $request->id_produto)
            ->where('fk_cor', $request->id_cor)
            ->where('fk_tamanho', $request->id_tamanho)
            ->where('fk_carrinho', $carrinho->id_carrinho) 
            ->first();


        $totalCarrinho = $carrinho->total_carrinho;


        // Se o item já existe no carrinho, atualize a quantidade e preço
        if ($itemExiste) {
            $carrinho->total_carrinho -= $itemExiste->preco_itens;
            $itemExiste->quantidade += $request->quantidade;
            $itemExiste->preco_itens = $request->preco_produto * $itemExiste->quantidade;
            $itemExiste->save();

            $carrinho->total_carrinho += $itemExiste->preco_itens;
            $carrinho->save();

            return response()->json([
                'message' => 'Quantidade atualizada no carrinho',
                'quantidade' => $itemExiste->quantidade,
            ]);
        }

        // Caso o item não exista, cria um novo item no carrinho
        $item = new CarrinhoItens;
        $item->fk_produto = $request->id_produto;
        $item->fk_carrinho = $carrinho->id_carrinho;
        $item->quantidade = $request->quantidade;
        $item->fk_cor = $request->id_cor;
        $item->fk_tamanho = $request->id_tamanho;
        $item->preco_itens = $request->preco_produto;
        $item->save();

        $totalCarrinho = $item->preco_itens;
        $carrinho->total_carrinho += $totalCarrinho;
        $carrinho->save();

        return response()->json([
            'message' => 'Item adicionado ao carrinho',
            'quantidade' => $item->quantidade,
        ]);
    }


    public function decremetProduto(Request $request)
    {
        $id = $request->id_produto;
        $carrinho = CarrinhoItens::where('fk_produto', $id)->first();

        if ($carrinho->quantidade > 0) {
            $carrinho->quantidade -= 1;
            
            $carrinho->save();
        }

        if ($carrinho->quantidade <= 0) {

            DB::table('tb_carrinho_itens')
                ->where('fk_produto', $id)
                ->delete();
        }
        return response()->json([
            'sucesso'
        ]);
    }


    public function deleteProdutoCarrinho($id_produto)
    {
        $carrinho = CarrinhoItens::where('fk_produto', $id_produto)->first();

        if ($carrinho) {
            $carrinho->delete();
        }
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
                ->join('tb_tamanho', 'tb_carrinho_itens.fk_tamanho', '=', 'tb_tamanho.id_tamanho')
                ->join('tb_cor', 'tb_carrinho_itens.fk_cor', '=', 'tb_cor.id_cor')
                ->select('id_produto', 'tb_produto.nome_produto', 'imagem_produto', 'preco_produto', 'quantidade', 'fk_tamanho', 'tb_tamanho.desc_tamanho', 'tb_cor.desc_cor', 'id_cor', 'id_tamanho')
                ->get();

            return response()->json([
                'itens' => $item,
                'carrinho' => $carrinho
            ]);
        }
    }
}
