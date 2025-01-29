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
        Schema::create('tb_relacao_cor', function (Blueprint $table) {
            $table->increments('id_relacao_cor');
            $table->unsignedInteger('fk_item');
            $table->unsignedInteger('fk_cor');

            $table->foreign('fk_item')->references('id_produto')->on('tb_produto');
            $table->foreign('fk_cor')->references('id_cor')->on('tb_cor');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('relacao_cors');
    }
};
