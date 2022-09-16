<?php

use Illuminate\Support\Facades\Route;
use App\Models\Day;
use App\Models\User;
use Hekmatinasser\Verta\Verta;

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
    return view('welcome');
});


Route::get('/time', function () {
    $user=User::where('name','مهدیار') -> first();
    $user2=User::where('name','میثم') -> first();

    $dayData=['user'=>$user->name,'H'=>'15:30-23:00','val'=>false];
    $today=new verta();
    $startM=verta()->startMonth();
    $day=verta()->startMonth();
    $endM=verta()->endMonth();
    

    $days=Day::whereBetween('time',[$startM->timestamp,$endM->timestamp])->get();

    // dd(Day::get()->first()->time==$startM->toCarbon());
    // dd(Day::whereBetween("time",[$startM->toCarbon(),$endM->toCarbon()])->get());
    $jalali=Day::where('time',$startM->toCarbon())->get();
    dd($jalali);
    dd(Day::where('data','exists', 'میثم'));
    dd($today,$today->timestamp,verta($today->timestamp));
    // $data=[
    //     '1'=>json_encode(['user'=>'']),
    //     '2' => 'Two',
    //     '3' => 'Three'
    // ];
    
//     $day = Day::create([
//         'time' => new Verta()->toCarbon(),
//         'work' => $validatedData['email'],
//         'password' => Hash::make($validatedData['password']),
// ]);
});