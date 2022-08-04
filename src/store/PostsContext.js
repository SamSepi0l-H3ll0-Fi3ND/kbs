import React, { createContext, useState, useCallback, useReducer } from "react";

import useHttp from "../hooks/useHttp";

const PostsContext = createContext({
  posts: [],
  setPosts: () => {},
  userPosts: [],
  setUserPosts: () => {},
  getPosts: () => {},
  postsIsLoading: null,
  postsError: null,
});

export const POST_ACTIONS = {
  ADD_POST: "add-post",
  DELETE_POST: "delete-post",
  UPDATE_POSTS: "update-posts",
  UPDATE_POST_COMMENT: "update-post-comment",
};

export const PostsContextProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  const {
    error: postsError,
    isLoading: postsIsLoading,
    sendRequest: postsRequest,
  } = useHttp();

  const { sendRequest: userPostsRequest } = useHttp();

  const getPosts = useCallback(async () => {
    const posts = await postsRequest({ url: "/api/posts" });

    setPosts(posts);
  }, [postsRequest]);

  const getUserPosts = useCallback(
    async (userId) => {
      const posts = await userPostsRequest({
        url: `/api/posts/user/${userId}`,
      });

      setUserPosts(posts);
    },
    [userPostsRequest]
  );

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        userPosts,
        setUserPosts,
        getPosts,
        getUserPosts,
        postsError,
        postsIsLoading,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
