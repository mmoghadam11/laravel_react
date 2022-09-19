<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
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
            Auth::guard()->login($user);
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                        // 'id'=>$this->id,
                        'access_token' => $token,
                        'token_type' => 'Bearer',
                        'user' => $user
            ]);
        }

    // ============ 
    //login
    // ============ 
    public function login(Request $request)
        {
            if (!Auth::attempt($request->only('email', 'password'))) {
                return response()->json([
                'message' => 'Invalid login details'
                        ], 401);
                }
            $user = User::where('email', $request['email'])->firstOrFail();
            # Delete the existing tokens from the database and create a new one
            auth()->user()->tokens()->delete();
            $token = $user->createToken('auth_token')->plainTextToken;

            return response()->json([
                    'access_token' => $token,
                    'token_type' => 'Bearer',
                    'user' => $user
            ]);
        }    


    // ============    
    // logout    
    // ============
    public function logout(Request $request)
        {
            // $request->user()->currentAccessToken()->delete();
            $request->user()->Tokens()->delete();
            Auth::logout();
            return response()->json(['message' => 'Logged Out'], 200);
        }    

    public function me(Request $request)
        {
            return $request->user();
        }    
}
