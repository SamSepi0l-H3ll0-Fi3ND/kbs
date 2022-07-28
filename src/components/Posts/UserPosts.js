import React, { useContext, useEffect } from "react";

import userContext from "../../UserContext";
import noPostsImg from "../../assets/imgs/noPosts.png";
import API from "../../env";
import Post from "./Post";

const UserPosts = () => {
  const ctx = useContext(userContext);

  const { token } = ctx.userData;

  let classes = token
    ? "md:overflow-y-scroll scrollbar-hide md:overflow-hidden"
    : "md:overflow-y-scroll scrollbar-hide flex items-center md:overflow-hidden";

  const loadPosts = () => {
    if (!token) {
      return (
        <div className="w-1/2 space-y-4 mx-auto">
          <h1 className="text-2xl">U had to login first to see Your posts!</h1>
          <img src={noPostsImg} alt="" />
        </div>
      );
    } else {
      return ctx.userPosts.map((post) => (
        <Post post={post} key={post.id} userPost />
      ));
    }
  };

  useEffect(() => {
    if (token) {
      (async () => {
        const response = await fetch(
          `${API}/api/posts/user/${ctx.userData.user.id}`
        );
        const data = await response.json();

        ctx.setUserPosts(data);
      })();
    }
  }, [token]);

  return <div className={classes}>{loadPosts()}</div>;
};

export default UserPosts;
