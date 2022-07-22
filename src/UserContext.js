import React, { createContext, useState, useEffect, useReducer } from "react";
import API from "./env";

const UserContext = createContext({
  userData: {},
  setUserData: () => {},
  posts: [],
  setPosts: () => {},
});

export const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({
    user: {
      id: 0,
      username: null,
      name: null,
      email: null,
      description: null,
      avatar_url: null,
      created_at: null,
      updated_at: null,
    },
    token: null,
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API}/api/posts`);
      const data = await response.json();

      setPosts(data);
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        posts,
        setPosts,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
