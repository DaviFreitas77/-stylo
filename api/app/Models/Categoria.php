<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Categoria extends Model
{
    protected $table = 'tb_categoria';
    protected $fillable = ['nome_categoria','imagem_categoria'];

    public $timestamps = false;
}
