<?php

use App\Http\Controllers\API\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\IndexController;

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

Route::match(['get', 'post', 'put', 'delete'],'/auth_failed', [AuthController::class, 'authFailed'])->name('login');
Route::get('/', [IndexController::class, 'index']);

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/posts', [PostController::class, 'getPosts']);
Route::get('/posts/user/{user}', [PostController::class, 'getPostsByUser']);
Route::put('/posts/add', [PostController::class, 'addPost'])->middleware(['auth:sanctum']);


Route::get('/check', [IndexController::class, 'index'])->middleware(['auth:sanctum']);
