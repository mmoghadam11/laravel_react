<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

// use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Eloquent;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Hekmatinasser\Verta\Verta;

class Day extends Eloquent
{
    use HasFactory;

    // protected $connection = 'mongodb';
    // protected $dates = ['time'];
    protected $guarded = [''];

    // protected $dates = ['time'];

    // public function getTimeAttribute($value)
    //     {
    //         return Verta($value->toDateTime());
    //     }
    
}
