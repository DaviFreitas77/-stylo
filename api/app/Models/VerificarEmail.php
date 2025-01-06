<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerificarEmail extends Model
{
    protected $table = 'tb_verificar_email';

    protected $fillable = ['id_usuario', 'token'];

    public $timestamps = false;
}

