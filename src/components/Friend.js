import API from "../env";

const Friend = ({
  friendAvatar,
  friendName,
  friendEmail,
  friendId,
  userId,
  userEmail,
  setConnection,
}) => {
  let connectionString;

  if (friendEmail && userEmail) {
    if (userId > friendId) {
      connectionString = `${friendEmail
        .replaceAll(".", "")
        .replaceAll("@", "")}${userEmail
        .replaceAll(".", "")
        .replaceAll("@", "")}`;
    } else {
      connectionString = `${userEmail
        .replaceAll(".", "")
        .replaceAll("@", "")}${friendEmail
        .replaceAll(".", "")
        .replaceAll("@", "")}`;
    }
  }

  return (
    <div
      onClick={() => setConnection(connectionString)}
      className="flex items-center justify-center space-x-3 bg-base-300 p-2 rounded-box shadow-lg md:w-50"
    >
      <div className="flex avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img src={`${API}${friendAvatar}`} alt="User Avatar" />
        </div>
      </div>
      <div className="font-bold lg:grid justify-items-center">{friendName}</div>
    </div>
  );
};

export default Friend;
