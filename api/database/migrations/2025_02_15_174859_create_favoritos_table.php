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
        Schema::create('tb_favorito', function (Blueprint $table) {
            $table->increments('id_favorito');
            $table->unsignedInteger('fk_usuario');
            $table->unsignedInteger('fk_produto');

            $table->foreign('fk_usuario')->references('id_usuario')->on('tb_usuario')->onDelete('cascade');
            $table->foreign('fk_produto')->references('id_produto')->on('tb_produto')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('favoritos');
    }
};
