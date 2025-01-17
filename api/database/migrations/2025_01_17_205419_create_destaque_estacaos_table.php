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
        Schema::create('tb_produto_destaque_estacao', function (Blueprint $table) {
            $table->increments('id_p_destaque_estacao');
            $table->unsignedInteger('fk_produto');

            $table->foreign('fk_produto')->references('id_produto')->on('tb_produto');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('destaque_estacaos');
    }
};
