import React, { useContext } from "react";
import UserContext from "../../UserContext";
import API from "../../env";

const UserInfo = () => {
  const ctx = useContext(UserContext);

  const { avatar_url, name, username } = ctx.userData.user;

  return (
    <div className="flex items-center space-x-3 bg-base-300 p-4 rounded-box w-full shadow-lg">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={`${API}${avatar_url}`} alt="User Avatar" />
        </div>
      </div>
      <div>
        <div className="font-bold">{name}</div>
        <div className="text-sm opacity-50">{username}</div>
      </div>
    </div>
  );
};

export default UserInfo;
