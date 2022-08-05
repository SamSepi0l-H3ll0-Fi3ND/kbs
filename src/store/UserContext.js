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
  userPosts: [],
  setUserPosts: () => {},
  theme: localStorage.theme,
  setTheme: () => {},
});

export const UserContextProvider = (props) => {
  const cookies = useMemo(() => new Cookies(), []);

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

  const [userPosts, setUserPosts] = useState([]);
  const [theme, setTheme] = useState(localStorage.theme);

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
      if (cookies.get("token")) {
        try {
          await getUserData();
        } catch (e) {
          console.error(e);
        }
      }
    })();
  }, [cookies, getUserData]);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        userPosts,
        setUserPosts,
        theme,
        setTheme,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
