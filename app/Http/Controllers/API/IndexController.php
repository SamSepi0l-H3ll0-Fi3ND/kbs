<?php
namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


use Illuminate\Support\Facades\Auth;

class IndexController extends BaseController
{
    public function index()
    {
        if (Auth::check()) {
            return $this->sendResponse(Auth::user());
        }
        return $this->sendResponse('Not logged in');
    }
}
