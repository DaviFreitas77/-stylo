<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarrinhoItens extends Model
{
    protected $table = 'tb_carrinho_itens';
    protected $primaryKey ='id_carrinho_itens';
    protected $fillable = ['fk_produto','fk_carrinho','quantidade','preco_itens'];

    public $timestamps = false;
}
