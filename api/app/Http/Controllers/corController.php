<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class corController extends Controller
{
    public function getCor(Request $request){
        $id_produto = $request->query('id_produto');

        $cor = DB::table('tb_relacao_cor')
        ->join('tb_cor','tb_relacao_cor.fk_cor', '=' ,'tb_cor.id_cor')
        ->where('tb_relacao_cor.fk_item',$id_produto)
        ->select('tb_cor.desc_cor')
        ->get();

        return response()->json($cor);

    }
}
