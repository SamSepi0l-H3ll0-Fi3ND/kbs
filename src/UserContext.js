import React, { createContext, useState } from "react";

const UserContext = createContext({
  userData: {},
  setUserData: () => {},
});

export const UserContextProvider = (props) => {
  const [userData, setUserData] = useState({
    user: {
      id: 11,
      username: null,
      name: null,
      email: null,
      description: null,
      avatar_url: "/avatars/default.png",
      created_at: null,
      updated_at: null,
    },
    token: null,
  });

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
