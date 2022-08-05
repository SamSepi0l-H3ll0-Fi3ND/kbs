import React, { useContext } from "react";

import Post from "./Post";
import PostsContext from "../../store/PostsContext";

const PostLists = () => {
  const ctx = useContext(PostsContext);
  const { posts } = ctx;

  const postsToDisplay = posts.map((post, index) => (
    <Post post={post} key={post.id} index={index} />
  ));

  return (
    <div className="md:overflow-y-scroll scrollbar-hide md:overflow-hidden">
      {postsToDisplay}
    </div>
  );
};

export default PostLists;
