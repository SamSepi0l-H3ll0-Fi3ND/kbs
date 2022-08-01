import React, { useContext } from "react";
import UserContext from "../../UserContext";
import API from "../../env";

import { Link } from "react-router-dom";
import Switcher from "../SwitcherButton";

const UserInfo = () => {
  const ctx = useContext(UserContext);

  const { token } = ctx.userData;

  const { avatar_url, name, username } = ctx.userData.user;

  return (
    <div className="flex items-center justify-center space-x-3 bg-base-300 p-2 rounded-box shadow-lg md:w-50 lg:w-full">
      <div className="flex avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={`${API}${avatar_url}`} alt="User Avatar" />
        </div>
      </div>
      <div>
        <div className="font-bold xs:hidden lg:grid justify-items-center">
          {name}
        </div>
        <div className="text-sm opacity-50 text-center xs:hidden lg:grid justify-items-center">
          {username}
        </div>
      </div>
      <div className="dropdown dropdown-end lg:dropdown-top dropdown-end">
        <label tabIndex="0" className="btn btn-ghost m-1 w-8">
          ...
        </label>
        <ul
          tabIndex="0"
          className="dropdown-content menu p-2 bg-base-100 rounded-box w-30 shadow-xl lg:w-52"
        >
          <li className="relative">
            <Switcher />
          </li>
          {token && (
            <li>
              <Link to="/login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="33"
                  height="22"
                  fill={ctx.theme === "dark" ? "white" : "black"}
                >
                  <path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z" />
                </svg>
                <button>Log out</button>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserInfo;
