<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Favorito extends Model
{
  protected  $table = 'tb_favorito';
  protected  $fillable = ['fk_usuario','fk_produto'];

}
