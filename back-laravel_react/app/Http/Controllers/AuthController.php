<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
    // private $id=0;
    //
    // public function __construct()
    // {
    //     $this->id = 0; 
    // }
    // public function index()
    // {
    //     $id=$this->id=$this->id+1;
    //     return $id; 
    // }


    public function register(Request $request)
        {
            
            $validatedData = $request->validate([
                        'name' => 'required|string|max:255',
                        'email' => 'required|string|email|max:255|unique:users',
                        'password' => 'required|string',
                        // |min:8
            ]);
                $user = User::create([
                        // 'id'=>$this->index(),
                        'name' => $validatedData['name'],
                        'email' => $validatedData['email'],
                        'password' => Hash::make($validatedData['password']),
                ]);
                

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                        // 'id'=>$this->id,
                        'access_token' => $token,
                            'token_type' => 'Bearer',
            ]);
        }

    //login
    public function login(Request $request)
        {
            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json([
                'message' => 'Invalid login details'
                        ], 401);
                }

            $user = User::where('email', $request['email'])->firstOrFail();

            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
            ]);
        }    


    public function logout()
        {
            Auth::logout();
            return response()->json(['message' => 'Logged Out'], 200);
        }    

    public function me(Request $request)
        {
            return $request->user();
        }    
}
