<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tb_adm', function (Blueprint $table) {
            $table->increments('id_adm');
            $table->string('nome_adm');
            $table->string('cpf_adm');
            $table->string('senha_adm');
          
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('a_d_m_s');
    }
};
