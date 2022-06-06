<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attendance_logs', function (Blueprint $table) {
            $table->id();
            $table->datetime('timestamp')->nullable();
            $table->string('type')->nullable(false);
            $table->unsignedInteger('user_id')->nullable(false);
            $table->string('log_type')->nullable(false);
            $table->unsignedInteger('attendance_approval_id')->nullable();
            $table->string('created_by')->nullable(false);
            $table->string('updated_by')->nullable();
            $table->datetime('created_at')->nullable();
            $table->datetime('updated_at')->nullable();
            $table->datetime('deleted_at')->nullable();
            $table->string('deleted_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('attendance_logs');
    }
};
