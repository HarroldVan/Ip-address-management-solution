<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\IpAddressController;
use App\IpAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:api')->group(function() {
    Route::post('/store', [IpAddressController::class, 'store']);
    Route::post('/update/{id}', [IpAddressController::class, 'edit']);
});

Route::get('/ip-address', [IpAddressController::class, 'index']);
Route::get('/ip-address/{id}', [IpAddressController::class, 'show']);
Route::post('/register', [AuthController::class, 'register']);
Route::get('/view/{id}', [IpAddressController::class, 'view']);
