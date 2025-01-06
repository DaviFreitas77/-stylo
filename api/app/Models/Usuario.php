<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    protected $table = 'tb_usuario';
    protected $primaryKey = 'id_usuario';
    protected $fillable = ['cpf_usuario','nome_usuario','email_usuario','numero_usuario','senha_usuario'];

    public $timestamps = false;
}
