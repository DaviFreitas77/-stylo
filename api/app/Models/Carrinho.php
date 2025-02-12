<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carrinho extends Model
{
    protected $table = 'tb_carrinho';
    protected $primaryKey = 'id_carrinho';
    protected $fillable = ['fk_usuario','total_carrinho'];

    public $timestamps = false;
}
