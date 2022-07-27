import React, { createContext, useState, useEffect } from "react";
import API from "./env";
import Cookies from "universal-cookie";

const UserContext = createContext({
  userData: {},
  setUserData: () => {},
  posts: [],
  setPosts: () => {},
  userPosts: [],
  setUserPosts: () => {},
});

export const UserContextProvider = (props) => {
  const cookies = new Cookies();

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
      tags: [],
    },
    token: null,
  });

  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API}/api/posts`);
      const data = await response.json();

      setPosts(data);
    })();

    (async () => {
      if (cookies.get("token")) {
        try {
          const response = await fetch(`${API}/api/user`, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${cookies.get("token")}`,
            },
          }).then((data) => data.json());
          const ussr = { user: response, token: cookies.get("token") };
          setUserData(ussr);
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        posts,
        setPosts,
        userPosts,
        setUserPosts,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
