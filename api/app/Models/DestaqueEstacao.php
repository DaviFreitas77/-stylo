<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DestaqueEstacao extends Model
{
    protected $table =- 'tb_produto_destaque_estacao';

    protected $fillable = ['fk_produto'];

    public $timestamps = false;
}
