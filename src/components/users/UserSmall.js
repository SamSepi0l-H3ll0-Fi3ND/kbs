import API from "../../env";
import { Link } from "react-router-dom";

const UserSmall = ({ user }) => {
  return (
    <Link to="./strangerinfo" state={{ stranger: user }}>
      <div className="flex items-center m-1 justify-between space-x-3 bg-base-300 p-2 rounded-box shadow-lg">
        <div className="flex avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={`${API}${user.avatar_url}`} alt="User Avatar" />
          </div>
        </div>
        <div className="font-bold lg:grid justify-items-center">
          {user.name}
        </div>
      </div>
    </Link>
  );
};

export default UserSmall;
