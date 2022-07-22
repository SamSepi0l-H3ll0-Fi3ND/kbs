import React from "react";
import Tag from "../../ui/Tag";
import PostComment from "./PostComment";
import AddComment from "./AddComment";
import API from "../../env";

const Post = ({ post }) => {
  const posts = post.tags.map((tag, index) => <Tag name={tag} key={index} />);

  const comments = post.comments.map((comment) => (
    <PostComment id={comment.id} key={comment.id} comment={comment} />
  ));

  const displayComments =
    comments.length > 0 ? (
      <div>
        <div className="divider p-4 m-0">Comments</div>
        <div className="flex flex-col items-start p-4">{comments}</div>
      </div>
    ) : null;

  return (
    <div className="card card-compact w-full shadow-lg my-4 bg-base-300">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col items-start">
          <p>{post.user.name}</p>
          <p className="text-sm">{post.created_at.slice(0, 10)}</p>
        </div>
        <div className="avatar w-16">
          <div className=" mask mask-squircle">
            <img src={`${API}${post.user.avatar_url}`} alt="User Avatar" />
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
      <div className="flex justify-start p-4">{posts}</div>
      <div className="card-body text-left">
        <p className="text-m">{post.body}</p>
      </div>
      {displayComments}
      <AddComment id={post.id} />
    </div>
  );
};

export default Post;
