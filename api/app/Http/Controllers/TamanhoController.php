<?php

namespace App\Http\Controllers;

use App\Models\Tamanho;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class TamanhoController extends Controller
{
    public function produtoTamanho(Request $request)
    {
        $id_produto = $request->query('id_produto');

        $tamanho = DB::table('tb_relacao_tamanho')
            ->join('tb_tamanho', 'tb_relacao_tamanho.fk_tamanho', '=', 'tb_tamanho.id_tamanho')
            ->where('tb_relacao_tamanho.fk_item', $id_produto)
            ->select('tb_tamanho.desc_tamanho')
            ->get();

        return response()->json($tamanho);
    }

    public function tamanho()
    {
        $tamanhos = Tamanho::all();
        return response()->json($tamanhos);
    }
    
}
