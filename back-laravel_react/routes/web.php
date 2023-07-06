<?php

use Illuminate\Support\Facades\Route;
use App\Models\Day;
use App\Models\User;
use App\Services\CalendarService;

use Hekmatinasser\Verta\Verta;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    $day=new verta();
    $createdDay = Day::factory()->create([
        'time' => Carbon::instance($day->datetime()),
    ]);
    dd($createdDay);
    return view('welcome');
});


Route::get('/time', function (CalendarService $calendar) {
    $user=User::where('name','مهدیار') -> first();
    $user2=User::where('name','میثم') -> first();

    [$array,$firstDay,$month,$today]=$calendar->calendar($user);
    dd($array,$firstDay,$month,$today);
});