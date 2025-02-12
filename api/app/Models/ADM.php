<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
class ADM extends Model
{
    use HasApiTokens;
    protected $table = 'tb_adm';
    protected $primaryKey = 'id_adm';
    protected $fillable = ['nome_adm','cpf_adm','senha_adm'];

    public $timestamps = false;
}
