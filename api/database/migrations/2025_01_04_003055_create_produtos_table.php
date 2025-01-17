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
        Schema::create('tb_produto', function (Blueprint $table) {
            $table->increments('id_produto');
            $table->string('nome_produto');
            $table->string('desc_produto');
            $table->decimal('preco_produto', 10, 3);
            $table->string('imagem_produto');
            $table->string('cor_produto');
            $table->unsignedInteger('fk_subCategoria');
            $table->boolean('destaque');
            $table->boolean('destaque_estacao');

            $table->foreign('fk_subCategoria')->references('id_subCategoria')->on('tb_subCategoria');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produtos');
    }
};
