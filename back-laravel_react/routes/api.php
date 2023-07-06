<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
// ****************************************
use App\Models\User;
use App\Models\Day;
use Hekmatinasser\Verta\Verta;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DayController;
use App\Services\CalendarService;
// ****************************************

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class,'logout']);
Route::post('/user', [AuthController::class, 'me'])->middleware('auth:sanctum');

Route::get('/data', function (Request $request) {
    $user=User::where('name','مهدیار') -> first();
    $user2=User::where('name','میثم') -> first();
    $data= [
        ['user'=>$user->name,'time'=>'8-15' , 'val'=>true],
        
    ];
    $newData=['user'=>$user2->name,'time'=>'15-23','val'=>false];
    array_push($data, $newData);
    $data2=json_encode($data);
    return response()->json(['d1'=>$data, 'd2'=>$data2], 200);
});


Route::middleware('auth:sanctum')->prefix('/user')->group(function(){
    Route::post('/time', [DayController::class,'usermounth']);
});

