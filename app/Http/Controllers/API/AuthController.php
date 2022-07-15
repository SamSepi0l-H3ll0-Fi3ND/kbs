<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules;

class AuthController extends BaseController
{
    public function login(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $authUser = Auth::user();
            $response['user'] = new UserResource(User::find($authUser->id));
            $response['token'] = $authUser->createToken('user_token')->plainTextToken;

            return $this->sendResponse($response);
        } else{
            return $this->sendError('Cannot login with provided data!', 400);
        }
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => "required|string|max:255",
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'username' => ['required', 'string', 'max:255'],
            'password' => ['required'], #Rules\Password::defaults()
        ]);

        if(!$validator->fails()){
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);

            event(new Registered($user));

            return $this->sendResponse("User registered successfully");
        }else{
            return $this->sendError($validator->messages()->toArray(), 400);
        }

    }

    public function authFailed(){
        return $this->sendError('Authentication error', 403);
    }
}
