<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class RelacaoTamanhoController extends Controller
{
    public function relacaoTamanho(Request $request)
    {
        $id_produto = $request->id_produto;
        $id_tamanho = $request->id_tamanho;

        $tamanhos = DB::table('tb_relacao_tamanho')->insert([
            'fk_item' => $id_produto,
            'fk_tamanho' => $id_tamanho

        ]);
    }
}
