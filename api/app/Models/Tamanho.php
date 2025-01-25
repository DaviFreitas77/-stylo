<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tamanho extends Model
{
    protected $table = 'tb_tamanho';
    protected $fillable = ['desc_tamanho'];
    public $timestamps = false;
}
