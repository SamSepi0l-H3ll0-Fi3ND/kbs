import React, { useContext } from "react";
import API from "../env";
import UserContext from "../store/UserContext";

const useSortPostsByTag = (tagValue) => {
  const ctx = useContext(UserContext);

  return async () => {
    const response = await fetch(`${API}/api/posts/tag/${tagValue}`);
    const data = await response.json();

    ctx.setPosts(data);
  };
};

export default useSortPostsByTag;
