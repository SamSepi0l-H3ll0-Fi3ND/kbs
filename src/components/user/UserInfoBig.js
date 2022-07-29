import React, { useContext } from "react";
import API from "../../env";
import Tag from "../../ui/Tag";
import UserContext from "../../UserContext";

const UserInfoBig = () => {
  const ctx = useContext(UserContext);

  const { avatar_url, name, description, tags, email } = ctx.userData.user;

  return (
    <div className="card bg-base-300">
      <div className="card-body items-center text-center p-4">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={`${API}${avatar_url}`} alt="User avatar" />
          </div>
        </div>
        <h2 className="card-title">{name ? name : "Username"}</h2>
        <p>{email}</p>
        <p>{description ? description : "Description"}</p>

        <div className="flex justify-center w-full gap-4">
          {tags
            ? tags.map((tag, index) => <Tag name={tag} key={index} />)
            : null}
        </div>
        {/*<div className="btn-group mt-6">*/}
        {/*  <button className="btn btn-accent btn-outline">Follow</button>*/}
        {/*  <button className="btn btn-accent btn-outline">...</button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default UserInfoBig;
