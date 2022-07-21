import React from "react";
import Tag from "../../ui/Tag";
import PostComment from "./PostComment";

// const post = {
//   id: 0,
//   body: "Lorem ipsum...",
//   created_at: "2022-07-14T12:00:00.000000Z",
//   updated_at: "2022-07-14T12:00:00.000000Z",
//   user: {
//     id: 0,
//     username: "unuel",
//     name: "Janusz Gajda",
//     email: "user@example.com",
//     description: "Hello everyone! Welcome to my profile",
//     avatar_url: "http://example.com",
//     email_verified_at: "2022-07-14T12:00:00.000000Z",
//     created_at: "2022-07-14T12:00:00.000000Z",
//     updated_at: "2022-07-14T12:00:00.000000Z",
//   },
// };

const Post = ({ post }) => {
  return (
    <div className="card card-compact w-full shadow-lg my-4 bg-base-300">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col items-start">
          <p>{post.user.name}</p>
          <p className="text-sm">{post.created_at.slice(0, 10)}</p>
        </div>
        <div className="avatar w-16">
          <div className=" mask mask-squircle">
            <img src="https://placeimg.com/192/192/people" alt="" />
          </div>
        </div>
      </div>
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="flex justify-start p-4">
        {post.tags.map((tag, index) => (
          <Tag name={tag} key={index} />
        ))}
      </div>
      <div className="card-body text-left">
        <p className="text-m">{post.body}</p>
      </div>
      <div className="divider p-4 m-0">Comments</div>
      <div className="flex flex-col items-start p-4">
        {post.comments.map((comment) => (
          <PostComment id={comment.id} key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
