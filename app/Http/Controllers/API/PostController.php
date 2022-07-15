<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\PostResource;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PostController extends BaseController
{
    public function getPosts(){
        return $this->sendResponse(PostResource::collection(Post::all()->sortByDesc('created_at')));
    }

    public function getPostsByUser(User $user){
        return $this->sendResponse(PostResource::collection($user->posts()->get()->sortByDesc('created_at')));
    }

    public function addPost(Request $request){
        $validator = Validator::make($request->all(), [
            'body' => "required|string",
        ]);
        if($validator->fails()){
            return $this->sendError($validator->messages()->toArray(), 400);
        }
        $post = new Post();
        $post->body = $request->body;
        Auth::user()->posts()->save($post);

        return $this->sendResponse(new PostResource($post));
    }
}
