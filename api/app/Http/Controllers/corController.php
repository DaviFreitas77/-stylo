<?php

namespace App\Http\Controllers;

use App\Models\Cor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class corController extends Controller
{
    public function getCor(Request $request)
    {
        $id_produto = $request->query('id_produto');

        $cor = DB::table('tb_relacao_cor')
            ->join('tb_cor', 'tb_relacao_cor.fk_cor', '=', 'tb_cor.id_cor')
            ->where('tb_relacao_cor.fk_item', $id_produto)
            ->select('id_relacao_cor', 'tb_cor.desc_cor', 'fk_cor')
            ->get();

        return response()->json($cor);
    }

    public function cor()
    {
        $cor = Cor::all();

        return response()->json($cor);
    }


    public function postCor(Request $request)
    {
        $desc_cor = $request->desc_cor;

        $cor = new Cor;
        $cor->desc_cor = $desc_cor;
        $cor->save();
        return response()->json([
            'message' => 'cor adicionada'
        ]);
    }
}
