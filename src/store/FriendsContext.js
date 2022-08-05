import React, { createContext, useState, useCallback } from "react";

import useHttp from "../hooks/useHttp";

const FriendsContext = createContext({
  friends: [],
  setFriends: () => {},
  getFriends: () => {},
  friendsIsLoading: null,
  friendsError: null,
});

export const FriendsContextProvider = (props) => {
  const [friends, setFriends] = useState([]);

  const {
    error: friendsError,
    isLoading: friendsIsLoading,
    sendRequest: friendsRequest,
  } = useHttp();

  const getFriends = useCallback(
    async (token) => {
      const friends = await friendsRequest({
        url: "/api/friends",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setFriends(friends);
    },
    [friendsRequest]
  );

  return (
    <FriendsContext.Provider
      value={{
        friends,
        setFriends,
        getFriends,
        friendsError,
        friendsIsLoading,
      }}
    >
      {props.children}
    </FriendsContext.Provider>
  );
};

export default FriendsContext;
