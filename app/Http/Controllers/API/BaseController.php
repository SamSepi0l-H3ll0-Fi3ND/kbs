<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($result){
        return response()->json($result, 200);
    }

    public function sendError($error, $code = 404){
        return response()->json($error, $code);
    }
}
