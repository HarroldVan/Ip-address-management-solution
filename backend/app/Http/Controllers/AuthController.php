<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request) {

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
            'confirm' => 'required'
        ]);

        if ($request->confirm != $request->password) {
            return response(['message' => 'Password doesnt match.'], 200);
        }

        User::create([
            'name' => ucwords($request->name),
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return response(['message' => 'Account created.'], 200);

    }
}
