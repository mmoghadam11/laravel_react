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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
        // if you want to use MONGO DB:
        // Schema::create('users', function ($collection) {
        //     $collection->increments('id');
        //     $collection->string('name');
        //     $collection->string('role');
        //     $collection->string('email')->unique();
        //     $collection->timestamp('email_verified_at')->nullable();
        //     $collection->string('password');
        //     $collection->rememberToken();
        //     $collection->timestamps();
        // });
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
