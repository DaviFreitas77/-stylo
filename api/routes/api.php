<?php

use App\Http\Controllers\categoriaController;
use App\Http\Controllers\produtoController;
use App\Http\Controllers\subCategoriaController;
use App\Http\Controllers\usuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/criarUsuario',[usuarioController::class,('criarUsuario')]);
Route::post('/criarCategoria',[categoriaController::class,('criarCategoria')]);
Route::post('/criarSubCategoria',[subCategoriaController::class,('criarSubCategoria')]);



//get

Route::get('/getCategorias',[categoriaController::class,('getCategorias')]);
Route::get('/getSubCategorias',[subCategoriaController::class,('getSubCategorias')]);
Route::get('/getProduto',[produtoController::class,('getProduto')]);