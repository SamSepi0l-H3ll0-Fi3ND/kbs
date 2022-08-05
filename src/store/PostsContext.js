import React, { createContext, useState, useCallback } from "react";

import useHttp from "../hooks/useHttp";

const PostsContext = createContext({
  posts: [],
  setPosts: () => { },
  userPosts: [],
  setUserPosts: () => { },
  getPosts: () => { },
  searchPosts: () => { },
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
      const userPosts = await userPostsRequest({
        url: `/api/posts/user/${userId}`,
      });

      setUserPosts(userPosts);
    },
    [userPostsRequest]
  );

  const searchPosts = useCallback(
    async (inputValue) => {
      const searchedPosts = await postsRequest({
        url: `/api/posts/tag/${inputValue}`
      });

      setPosts(searchedPosts);
    },
    [postsRequest]
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
        searchPosts,
        postsError,
        postsIsLoading,
      }}
    >
      {props.children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
