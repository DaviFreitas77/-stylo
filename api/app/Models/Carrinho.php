<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carrinho extends Model
{
    protected $table = 'tb_carrinho';
    protected $fillable = ['id_usuario'];

    public $timestamps = false;
}
