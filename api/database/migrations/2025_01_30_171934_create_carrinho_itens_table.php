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
        Schema::create('tb_carrinho_itens', function (Blueprint $table) {
            $table->increments('id_carrinho_itens');
            $table->unsignedInteger('fk_produto');
            $table->unsignedInteger('fk_carrinho');
            $table->decimal('preco_itens',10,2);
            $table->unsignedInteger('fk_cor');
            $table->unsignedInteger('fk_tamanho');
            $table->integer('quantidade');
            $table->foreign('fk_produto')->references('id_produto')->on('tb_produto');
            $table->foreign('fk_carrinho')->references('id_carrinho')->on('tb_carrinho');
            $table->foreign('fk_cor')->references('id_cor')->on('tb_cor');
            $table->foreign('fk_tamanho')->references('id_tamanho')->on('tb_tamanho');
            


            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carrinho_itens');
    }
};
