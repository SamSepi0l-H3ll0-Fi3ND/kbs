import React from "react";
import ProfileCard from "../components/ProfileCard";
import Nav from "../components/Nav";
import UserInfo from "../components/UserInfo";
import PostsContainer from "../components/Posts/PostsContainer";

const Layout = () => {
  return (
    <div className="container p-4 grid gap-4 grid-cols-3 relative">
      <div className="flex flex-col justify-between">
        <Nav />
        <UserInfo />
      </div>
      <PostsContainer />
    </div>
  );
};

export default Layout;
