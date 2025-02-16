<?php

namespace App\Http\Controllers;

use App\Models\Favorito;
use Illuminate\Http\Request;

class favoritoContrller extends Controller
{
    public function addFavorito(Request $request)
    {
        $id_usuario = $request->id_usuario;
        $id_produto = $request->id_produto;

        if ($id_usuario && $id_produto) {
            $favorito = new Favorito;
            $favorito->fk_usuario = $id_usuario;
            $favorito->fk_produto = $id_produto;
            $favorito->save();
        };
        return response()->json([
            'produto favoritado'
        ]);
    }
}
