<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    protected $table = 'tb_produto';
    protected $primaryKey= 'id_produto';
    protected $fillable = ['nome_produto','desc_produto','preco_produto','imagem_produto','fk_subCategoria','destaque','destaque_estacao'];

    public $timestamps = false;
}
