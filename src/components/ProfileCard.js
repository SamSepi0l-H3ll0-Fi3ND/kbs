import { useContext } from "react";
import UserContext from "../UserContext";

const ProfileCard = () => {
  const ctx = useContext(UserContext);

  const { avatar_url, name, description } = ctx.userData.user;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img
              src={`http://192.168.0.125:8000${avatar_url}`}
              alt="User avatar"
            />
          </div>
        </div>
        <h2 className="card-title">{name && "Username"}</h2>
        <p>{description && "User description"}</p>
        <div className="flex justify-center  mt-6">
          <div className="btn btn-outline ml-1 btn-xs">Piłka nożna</div>
          <div className="btn btn-outline  ml-1 btn-xs">Alkohol</div>
          <div className="btn btn-outline ml-1 btn-xs">Web Design</div>
          <div className="btn btn-outline  ml-1 btn-xs">Games</div>
        </div>
        <div className="btn-group mt-6">
          <button className="btn btn-accent btn-outline">Follow</button>
          <button className="btn btn-accent btn-outline">...</button>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
