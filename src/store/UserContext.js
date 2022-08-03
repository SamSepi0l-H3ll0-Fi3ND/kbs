import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Cookies from "universal-cookie";
import useHttp from "../hooks/useHttp";

const UserContext = createContext({
  userData: {},
  setUserData: () => {},
  posts: [],
  setPosts: () => {},
  userPosts: [],
  setUserPosts: () => {},
  theme: localStorage.theme,
  setTheme: () => {},
  getPosts: () => {},
});

export const UserContextProvider = (props) => {
  const cookies = useMemo(() => new Cookies(), []);

  const { sendRequest: postsRequest } = useHttp();

  const { sendRequest: userDataRequest } = useHttp();

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
      tags: null,
    },
    token: null,
  });

  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [theme, setTheme] = useState(localStorage.theme);

  const getPosts = useCallback(async () => {
    const posts = await postsRequest({ url: "/api/posts" });

    setPosts(posts);
  }, [postsRequest]);

  const getUserData = useCallback(async () => {
    const userData = await userDataRequest({
      url: "/api/user",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });

    setUserData({ user: userData.data, token: cookies.get("token") });
  }, [userDataRequest, cookies]);

  useEffect(() => {
    (async () => {
      await getPosts();

      if (cookies.get("token")) {
        try {
          await getUserData();
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [cookies, getPosts, getUserData]);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        posts,
        setPosts,
        userPosts,
        setUserPosts,
        theme,
        setTheme,
        getPosts,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
