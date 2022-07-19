import React from "react";
import PostsList from "./PostsList";
import AddPost from "./AddPost";

const PostsContainer = () => {
  return (
    <div>
      <div className="fixed top-0">
        <AddPost />
      </div>
      <div>
        <PostsList />
      </div>
    </div>
  );
};

export default PostsContainer;
