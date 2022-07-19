import React from "react";

const post = {
  id: 0,
  body: "Lorem ipsum...",
  created_at: "2022-07-14T12:00:00.000000Z",
  updated_at: "2022-07-14T12:00:00.000000Z",
  user: {
    id: 0,
    username: "unuel",
    name: "Janusz Gajda",
    email: "user@example.com",
    description: "Hello everyone! Welcome to my profile",
    avatar_url: "http://example.com",
    email_verified_at: "2022-07-14T12:00:00.000000Z",
    created_at: "2022-07-14T12:00:00.000000Z",
    updated_at: "2022-07-14T12:00:00.000000Z",
  },
};

const Post = ({}) => {
  return (
    <div className="card card-compact w-96 shadow-xl m-4 bg-base-300">
      <div className="flex justify-between items-center p-2">
        <div className="flex flex-col items-start">
          <p>{post.user.name}</p>
          <p className="text-sm">{post.created_at.slice(0, 10)}</p>
        </div>
        <div className="avatar w-16">
          <div className=" mask mask-squircle">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body text-left">
        <p className="text-m">{post.body}</p>
      </div>
    </div>
  );
};

export default Post;
