<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Jenssegers\Mongodb\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Day extends Model
{
    use HasFactory;

    protected $connection = 'mongodb';
    // protected $dates = ['time'];
    protected $guarded = [''];

    
}
