<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cor extends Model
{
    protected $table = 'tb_cor';
    protected $fillable = ['desc_cor'];

    public $timestamps = false;
}
