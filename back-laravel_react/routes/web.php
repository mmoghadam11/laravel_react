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

    $dayData=['user'=>$user->name,'H'=>'15-23','val'=>false];
    $today=new verta();
    $startM=verta()->startMonth();
    $day=verta()->startMonth();
    $endM=verta()->endMonth();
    $array = array();
    while($day<=$endM)
    {
        $data=['data'=>$dayData,'time'=>$day->format('%B %d، %Y'),'day'=>$day->formatWord('l')];
        array_push($array, $data);
        $day->addDay();
    }
    dd($array);
    // $data=[
    //     '1'=>json_encode(['user'=>'']),
    //     '2' => 'Two',
    //     '3' => 'Three'
    // ];
    
    $day = Day::create([
        'time' => new Verta(),
        'work' => $validatedData['email'],
        'password' => Hash::make($validatedData['password']),
]);
});