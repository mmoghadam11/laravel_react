<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Laravel\Sanctum\HasApiTokens;
// use Illuminate\Foundation\Auth\User as Authenticatable;
use Jenssegers\Mongodb\Auth\User as Authenticatable;

use Illuminate\Notifications\Notifiable;


// use Jenssegers\Mongodb\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;



class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $connection = 'mongodb';
    /**
   * The attributes that should be cast to native types.
   *
   * @var array
   * 
   */
    // protected $primaryKey = 'id';
    protected $dates = ['email_verified_at'];
    // **************************************************************************************************************
    // cause we want use auto incriment id
    // public function nextid()
    // {
    //     // usr_id is the counter - change it to whatever you want to increment
    //     $this->usr_id = self::getID();
    // }

    // public static function bootUseAutoIncrementID()
    // {
    //     static::creating(function ($model) {
    //         $model->sequencial_id = self::getID($model->getTable());
    //     });
    // }
    // public function getCasts()
    // {
    //     return $this->casts;
    // }
    
    // private static function getID()
    // {
    //     $seq = \DB::connection('mongodb')->getCollection('users')->findOneAndUpdate(
    //         ['user_id' => 'usr_id'],
    //         ['$inc' => ['seq' => 1]],
    //         ['new' => true, 'upsert' => true, 'returnDocument' => \MongoDB\Operation\FindOneAndUpdate::RETURN_DOCUMENT_AFTER]
    //     );
    //     return $seq->seq;
    // }
    // ********************************************************************************************************************
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        // 'id',
        'name',
        'email',
        'password',
        'role',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
