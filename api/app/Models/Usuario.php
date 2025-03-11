<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class Usuario extends Model
{
    use HasApiTokens;
    protected $table = 'tb_usuario';
    protected $primaryKey = 'id_usuario';
    protected $fillable = ['cpf_usuario','nome_usuario','email_usuario','numero_usuario','senha_usuario','confirmado'];

    public $timestamps = false;
}
