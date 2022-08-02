import React, { useState, useContext } from "react";
import useChat from "../hooks/useChat";
import UserContext from "../store/UserContext";
import Friend from "./Friend";
import useFriend from "../hooks/useFriend";

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, sendMessage, getMessages, setConnection] = useChat();
  const [friends, isLoading] = useFriend();

  const ctx = useContext(UserContext);

  const { name, email } = ctx.userData.user;

  const submitHandler = async (e) => {
    e.preventDefault();
    await sendMessage(name, inputValue);

    setInputValue("");
  };

  let friendName = !isLoading ? friends[10].name : "Loading...";
  let friendAvatar = !isLoading ? friends[10].avatar_url : "";
  let friendEmail = !isLoading ? friends[10].email : null;

  return (
    <div>
      <Friend
        friendName={friendName}
        friendAvatar={friendAvatar}
        friendEmail={friendEmail}
        userEmail={email}
        setConnection={setConnection}
      />
      <button onClick={getMessages} className="btn">
        Load messages
      </button>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      </form>
      <div>Wiadomości</div>
      {messages.map((mesTab, index) => (
        <p key={index}>{mesTab[1].message}</p>
      ))}
    </div>
  );
};

export default Chat;
