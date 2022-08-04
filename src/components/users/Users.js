import React, { useContext } from "react";

import UserSmall from "./UserSmall";
import StrangersContext from "../../store/StrangersContext";

const Users = () => {
  const ctx = useContext(StrangersContext);

  const { strangers } = ctx;
  const usersToDisplay = strangers.map((stranger, index) => (
    <UserSmall key={index} user={stranger} />
  ));

  return (
    <div className="md:overflow-y-scroll scrollbar-hide md:overflow-hidden">
      {usersToDisplay}
    </div>
  );
};

export default Users;
