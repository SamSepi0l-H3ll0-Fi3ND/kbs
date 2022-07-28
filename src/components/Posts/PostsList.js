import React, { useContext } from "react";

import Post from "./Post";
import UserContext from "../../UserContext";

const PostLists = () => {
  const ctx = useContext(UserContext);

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
