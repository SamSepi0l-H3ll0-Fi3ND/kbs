import React, { useState, useContext, useRef, useEffect } from "react";
import useChat from "../../hooks/useChat";
import UserContext from "../../store/UserContext";
import Friend from "./Friend";
import useFriend from "../../hooks/useFriend";

const Friends = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, sendMessage, getMessages, setConnection] = useChat();
  const [friends, isLoading] = useFriend();
  const [isLoaded, setIsLoaded] = useState(false);

  const ctx = useContext(UserContext);

  const messagesBoxRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    if (isLoaded) {
      messagesBoxRef.current.lastChild.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [setIsLoaded, messages]);

  const { name, email, id } = ctx.userData.user;

  const submitHandler = async (e) => {
    e.preventDefault();
    await sendMessage(name, inputValue, id);

    setInputValue("");
  };

  let friendName = !isLoading ? friends[29].name : "Loading...";
  let friendAvatar = !isLoading ? friends[29].avatar_url : "";
  let friendEmail = !isLoading ? friends[29].email : null;
  let friendId = !isLoading ? friends[29].id : null;

  return (
    <div className="collapse" onClick={getMessages}>
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium p-0 mb-2">
        <Friend
          friendName={friendName}
          friendAvatar={friendAvatar}
          friendEmail={friendEmail}
          friendId={friendId}
          userId={id}
          userEmail={email}
          setConnection={setConnection}
        />
      </div>
      <div className="collapse-content">
        <form onSubmit={submitHandler} className="bg-base-200">
          <h2 className="font-bold text-center">Wiadomości</h2>
          <div
            className="max-h-52 scrollbar-hide overflow-y-scroll"
            ref={messagesBoxRef}
          >
            {messages.map((mesTab, index) => {
              if (mesTab[1].id === id) {
                return (
                  <p key={index} className="p-1">
                    {mesTab[1].message}
                  </p>
                );
              } else {
                return (
                  <p key={index} className="p-1 text-right">
                    {mesTab[1].message}
                  </p>
                );
              }
            })}
          </div>
          <div className="divider divider-vertical p-2"></div>
          <input
            className="input input-primary w-full"
            placeholder="Send message..."
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
        </form>
      </div>

      {/*<button onClick={getMessages} className="btn">*/}
      {/*  Load messages*/}
      {/*</button>*/}

      {/*<div>Wiadomości</div>*/}
      {/*{messages.map((mesTab, index) => (*/}
      {/*  <p key={index}>{mesTab[1].message}</p>*/}
      {/*))}*/}
    </div>
  );
};

export default Friends;
