<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subcategoria extends Model
{
    protected $table = 'tb_subCategoria';
    protected $fillable = ['nome_subCategoria','fk_categoria'];


    public $timestamps = false;
}
