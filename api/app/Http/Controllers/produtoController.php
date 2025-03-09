<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use App\Models\ProdutoDestaque;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Echo_;

class produtoController extends Controller
{
    public function criarProduto(Request $request)
    {
        $produto = new Produto;
        $produto->nome_produto = $request->nome_produto;
        $produto->desc_produto = $request->desc_produto;
        $produto->preco_antigo_produto = $request->preco_antigo;
        $produto->preco_produto = $request->preco_produto;
        $produto->imagem_produto = $request->imagem_produto;
        $produto->fk_subCategoria = $request->fk_subCategoria;
        $produto->destaque = $request->destaque;
        $produto->destaque_estacao = $request->destaque_estacao;

        $produto->save();
        $tamanhosString = $request->tamanhos; 
        $tamanhosArray = explode(',', $tamanhosString);
        $cores = $request->cores;
        $coresArray = explode(',',$cores);


        
        
        if ($produto->id_produto) {
            foreach ($tamanhosArray as $tamanho) {
                DB::table('tb_relacao_tamanho')->insert([
                    'fk_item' => $produto->id_produto,
                    'fk_tamanho' => $tamanho,
                ]);
            }
        }

        if ($produto->id_produto) {
            foreach ($coresArray as $cor) {
                DB::table('tb_relacao_cor')->insert([
                    'fk_item' => $produto->id_produto,
                    'fk_cor' => $cor,
                ]);
            }
        }

        if ($request->destaque) {
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
            ->select('id_produto', 'nome_produto', 'desc_produto', 'preco_produto', 'imagem_produto', 'fk_subcategoria', 'destaque', 'destaque_estacao', 'preco_antigo_produto')
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

    public function getProdutosMasculino(Request $request) {
        $id_categoria =  $request->query('id_categoria'); 

    
        $produtos = DB::table('tb_produto')
            ->join('tb_subCategoria', 'tb_produto.fk_subCategoria', '=', 'tb_subCategoria.id_subCategoria')
            ->join('tb_categoria', 'tb_subCategoria.fk_categoria', '=', 'tb_categoria.id_categoria')
            ->where('tb_categoria.id_categoria', $id_categoria)
            ->select('tb_produto.id_produto','tb_produto.nome_produto','tb_produto.imagem_produto','tb_produto.preco_produto','tb_produto.preco_antigo_produto')
            ->get();
    
        return response()->json($produtos);
    }
}

