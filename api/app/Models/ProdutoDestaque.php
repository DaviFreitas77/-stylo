<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProdutoDestaque extends Model
{
    protected $table =- 'tb_produto_destaque';

    protected $fillable = ['fk_produto'];

    public $timestamps = false;
}
