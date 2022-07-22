import React, { useContext, useState, useEffect } from "react";
import PostsList from "./PostsList";
import AddPost from "./AddPost";
import UserContext from "../../UserContext";

import API from "../../env";

const PostsContainer = () => {
  const ctx = useContext(UserContext);
  const { token } = ctx.userData;

  return (
    <>
      {token && <AddPost />}
      <PostsList />
    </>
  );
};

export default PostsContainer;
