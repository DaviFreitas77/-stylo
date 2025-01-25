<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class relacaoTamanhoItem extends Model
{
    protected $table = 'tb_relacao_tamanho';
    protected $fillable = ['fk_item','fk_tamanho'];
    public $timestamps = false;
}
