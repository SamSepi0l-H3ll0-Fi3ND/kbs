import React, { useState, useEffect } from "react";

import Post from "./Post";

const PostLists = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect");

    (async () => {
      const response = await fetch("http://192.168.0.125:8000/api/posts");

      const data = await response.json();

      setPosts(data);
    })();
  }, []);

  const postsToDisplay = posts.map((post) => (
    <Post post={post} key={post.id} />
  ));

  return <div className="w-full ml-auto relative">{postsToDisplay}</div>;
};

export default PostLists;
