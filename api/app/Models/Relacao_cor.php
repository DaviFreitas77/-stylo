<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Relacao_cor extends Model
{
    protected $table ='tb_relacao_cor';
    protected $fillable = ['fk_item','fk_cor'];
    public $timestamps = false;
}
