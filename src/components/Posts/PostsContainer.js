import React, { useContext, useState, useEffect } from "react";
import PostsList from "./PostsList";
import AddPost from "./AddPost";
import UserContext from "../../UserContext";

import API from "../../env";

const PostsContainer = () => {
  const ctx = useContext(UserContext);
  const { token } = ctx.userData;

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   console.log("useEffect");
  //
  //   (async () => {
  //     const response = await fetch(`${API}/api/posts`);
  //     const data = await response.json();
  //
  //     setPosts(data);
  //     console.log(data);
  //   })();
  // }, []);

  return (
    <>
      {token && <AddPost />}
      <PostsList posts={posts} />
    </>
  );
};

export default PostsContainer;
