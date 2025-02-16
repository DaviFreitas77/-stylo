<?php

use App\Http\Controllers\carrinhoController;
use App\Http\Controllers\categoriaController;
use App\Http\Controllers\corController;
use App\Http\Controllers\favoritoContrller;
use App\Http\Controllers\pesquisaController;
use App\Http\Controllers\produtoController;
use App\Http\Controllers\RelacaoTamanhoController;
use App\Http\Controllers\subCategoriaController;
use App\Http\Controllers\TamanhoController;
use App\Http\Controllers\usuarioController;
use App\Http\Controllers\PagamentoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/criarUsuario',[usuarioController::class,('criarUsuario')]);
Route::post('/criarCategoria',[categoriaController::class,('criarCategoria')]);
Route::post('/criarSubCategoria',[subCategoriaController::class,('criarSubCategoria')]);

Route::middleware('auth:sanctum')->post('/criarProduto', [ProdutoController::class, 'criarProduto']);



Route::post('/login',[usuarioController::class,('login')]);
Route::post('/addCarrinho',[carrinhoController::class,('addCarrinho')]);
Route::post('/addRelacaoTamanho',[RelacaoTamanhoController::class,('relacaoTamanho')]);
Route::post('/pagamento',[PagamentoController::class,('createCharge')]);
Route::post('/decrement',[carrinhoController::class,('decremetProduto')]);
Route::post('/addFavorito',[favoritoContrller::class,('addFavorito')]);


//get

Route::get('/getCategorias',[categoriaController::class,('getCategorias')]);
Route::get('/getSubCategorias',[subCategoriaController::class,('getSubCategorias')]);
Route::get('/produto',[produtoController::class,('getProduto')]);

Route::get('/getDestaque',[produtoController::class,('getProdutoDestaque')]);
Route::get('/destaqueEstacao',[produtoController::class,('getDestaqueEstacao')]);
Route::get('/interesseUsuario',[produtoController::class,('getInteresseUsuario')]);
Route::get('/pesquisa',[pesquisaController::class,('pesquisa')]);
Route::get('/tamanho',[TamanhoController::class,('produtoTamanho')]);
Route::get('/gettamanho',[TamanhoController::class,('tamanho')]);
Route::get('/cor',[corController::class,('getCor')]);
Route::get('/getcor',[corController::class,('cor')]);
Route::get('/carrinho',[carrinhoController::class,('getCarrinho')]);