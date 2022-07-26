import React, { useContext, useState, useEffect } from "react";

import userContext from "../../UserContext";
import noPostsImg from "../../assets/imgs/noPosts.png";
import API from "../../env";
import Post from "./Post";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const ctx = useContext(userContext);

  const { token } = ctx.userData;

  let classes = token
    ? "overflow-y-scroll scrollbar-hide"
    : "overflow-y-scroll scrollbar-hide flex items-center";

  let data;
  if (!token) {
    data = (
      <div className="w-1/2 space-y-4 mx-auto">
        <h1 className="text-2xl">U had to login first to see Your posts!</h1>
        <img src={noPostsImg} alt="" />
      </div>
    );
  } else {
    data = userPosts.map((post) => <Post post={post} key={post.id} />);
  }

  useEffect(() => {
    if (token) {
      (async () => {
        const response = await fetch(
          `${API}/api/posts/user/${ctx.userData.user.id}`
        );
        const data = await response.json();

        setUserPosts(data);
      })();
    }
  }, []);

  return <div className={classes}>{data}</div>;
};

export default UserPosts;
