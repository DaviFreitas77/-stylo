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
        Schema::create('tb_relacao_tamanho', function (Blueprint $table) {
            $table->increments('id_relacao_tamanho');
            $table->unsignedInteger('fk_item');
            $table->unsignedInteger('fk_tamanho');

            $table->foreign('fk_item')->references('id_produto')->on('tb_produto');
            $table->foreign('fk_tamanho')->references('id_tamanho')->on('tb_tamanho');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relacao_tamanho_items');
    }
};
