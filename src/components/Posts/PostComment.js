import React from "react";
import API from "../../env";

const PostComment = ({ comment }) => {
  const { name, avatar_url, created_at } = comment.user;

  return (
    <div id={comment.id} className="p-4 text-left flex ">
      <div className="flex gap-2">
        <div>
          <img
            src={`${API}${avatar_url}`}
            alt={`${name} user avatar`}
            className="w-8"
          />
          <p>{name}</p>
        </div>
        <div className="">
          <p>{comment.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
