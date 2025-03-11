<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VerificarEmail extends Model
{
    public $table = 'tb_verificar_email';
    public $primaryKey = 'id_verificar_email';
    public $fillable = ['email_usuario','codigo'];

    public $timestamps = false;
}
