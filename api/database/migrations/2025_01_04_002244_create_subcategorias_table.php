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
        Schema::create('tb_subCategoria', function (Blueprint $table) {
            $table->increments('id_subCategoria');
            $table->string('nome_subCategoria');
            $table->unsignedInteger('fk_categoria');

            $table->foreign('fk_categoria')->references('id_categoria')->on('tb_categoria');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('subcategorias');
    }
};
