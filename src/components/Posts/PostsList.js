import React, { useContext } from "react";

import Post from "./Post";
import UserContext from "../../UserContext";

const PostLists = () => {
  const ctx = useContext(UserContext);

  const { posts } = ctx;

  const postsToDisplay = posts.map((post) => (
    <Post post={post} key={post.id} />
  ));

  return (
    <div className="overflow-y-scroll scrollbar-hide">{postsToDisplay}</div>
  );
};

export default PostLists;
