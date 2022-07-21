import { useContext } from "react";
import UserContext from "../../UserContext";
import Tag from "../../ui/Tag";
import API from "../../env";

const UserCard = () => {
  const ctx = useContext(UserContext);

  const { avatar_url, name, description, tags } = ctx.userData.user;

  return (
    <div className="card bg-base-300">
      <div className="card-body items-center text-center p-4">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src={`${API}${avatar_url}`} alt="User avatar" />
          </div>
        </div>
        <h2 className="card-title">{name ? name : "Username"}</h2>
        <p>{description ? description : "Username"}</p>
        <div className="flex justify-start w-full">
          {tags ? tags.map((tag) => <Tag name={tag} />) : null}
        </div>
        {/*<div className="btn-group mt-6">*/}
        {/*  <button className="btn btn-accent btn-outline">Follow</button>*/}
        {/*  <button className="btn btn-accent btn-outline">...</button>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};
export default UserCard;
