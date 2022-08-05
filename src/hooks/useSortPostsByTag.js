import React, { useContext } from "react";
import API from "../env";
import PostsContext from "../store/PostsContext";

const useSortPostsByTag = (tagValue) => {
  const postsContext = useContext(PostsContext);

  return async () => {
    const response = await fetch(`${API}/api/posts/tag/${tagValue}`);
    const data = await response.json();

    postsContext.setPosts(data);
  };
};

export default useSortPostsByTag;
