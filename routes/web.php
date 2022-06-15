<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::get('/', 'App\Http\Controllers\AttendanceLogController@index')->name('index');

Route::post('/timeInOut', 'App\Http\Controllers\AttendanceLogController@timeInOut');
// Route::post('/timeOut', 'App\Http\Controllers\AttendanceLogController@timeOut');
