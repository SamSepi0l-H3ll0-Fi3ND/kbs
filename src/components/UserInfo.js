import React from "react";

const UserInfo = () => {
  return (
    <div className="flex items-center space-x-3 fixed bottom-0 left-0 m-4 bg-base-300 p-4 rounded-box">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img
            src="https://placeimg.com/300/100/people"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div className="font-bold">Hart Hagerty</div>
        <div className="text-sm opacity-50">United States</div>
      </div>
    </div>
  );
};

export default UserInfo;
