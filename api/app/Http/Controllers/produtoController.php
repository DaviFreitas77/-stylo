<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use App\Models\ProdutoDestaque;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class produtoController extends Controller
{
    public function criarProduto(Request $request)
    {
        $produto = new Produto;
        $produto->nome_produto = $request->nome_produto;
        $produto->desc_produto = $request->desc_produto;
        $produto->preco_produto = $request->preco_produto;
        $produto->imagem_produto = $request->imagem_produto;
        $produto->fk_subCategoria = $request->fk_subCategoria;
        $produto->destaque = $request->destaque;
        $produto->destaque_estacao = $request->destaque_estacao;

        $produto->save();

        if ($request->destaque) {
            echo ($produto->id_produto);

            DB::table('tb_produto_destaque')->insert([
                'fk_produto' => $produto->id_produto,
            ]);
        }

        if ($request->destaque_estacao) {
            DB::table('tb_produto_destaque_estacao')->insert([
                'fk_produto' => $produto->id_produto,
            ]);
        }

        return response()->json([
            'message' => 'Produto Cadastrado com sucesso'
        ], 201);
    }

    public function getProduto(Request $request)
    {
        $id = $request->id_produto;
        $produto = Produto::where('id_produto', $id)
            ->select('id_produto', 'nome_produto', 'desc_produto', 'preco_produto', 'imagem_produto', 'fk_subcategoria', 'destaque', 'destaque_estacao')
            ->get();

        return response()->json($produto);
    }

    public function getProdutoDestaque()
    {
        $produtosDestaque = DB::table('tb_produto_destaque')
            ->join('tb_produto', 'tb_produto_destaque.fk_produto', '=', 'tb_produto.id_produto')
            ->get();

        return response()->json($produtosDestaque);
    }

    public function getDestaqueEstacao()
    {
        $produtos = DB::table('tb_produto_destaque_estacao')
            ->join('tb_produto', 'tb_produto_destaque_estacao.fk_produto', '=', 'tb_produto.id_produto')
            ->get();

        return response()->json($produtos);
    }

    public function getInteresseUsuario(Request $request)
    {
        $subcategoria = $request->subCategoria;
        $produtos = Produto::where('fk_subcategoria', $subcategoria)
            ->limit(6)
            ->get();

        return response()->json($produtos);
    }
}
