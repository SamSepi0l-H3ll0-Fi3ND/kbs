import React, { useContext } from "react";
import { Route, Routes, Link } from "react-router-dom";

import UserContext from "../UserContext";

import UserCard from "../components/user/UserCard";
import Nav from "../components/Nav";
import UserInfo from "../components/user/UserInfo";
import PostsContainer from "../components/Posts/PostsContainer";
import SearchPost from "../components/Posts/SearchPost";
import UserPosts from "../components/Posts/UserPosts";
import logoImg from "../assets/imgs/logo.svg";
import Site404 from "./Site404";

const Dashboard = () => {
  const ctx = useContext(UserContext);

  const { token } = ctx.userData;

  return (
    <div className="p-8 flex flex-col min-w-min lg:flex-row min-h-screen max-h-screen">
      <div className="flex justify-between lg:flex-col">
        <div className="flex items-center justify-between gap-4 lg:flex-col">
          <img
            src={logoImg}
            className="w-32 lg:w-52 shadow-sm"
            alt="Moon Logotype"
          />
          <Nav />
        </div>
        <div>
          {!token && (
            <div className="flex gap-4">
              <Link to="/register">
                <button className="btn btn-primary w-full">Register</button>
              </Link>
              <Link to="/login" className="grow">
                <button className="btn btn-primary w-full">Login</button>
              </Link>
            </div>
          )}
          {token && <UserInfo />}
        </div>
      </div>

      <div className="divider lg:divider-horizontal lg:order-last p-2"></div>

      <div className="flex flex-col justify-between gap-4 lg:order-last">
        <SearchPost />
      </div>

      <div className="divider lg:divider-horizontal p-2"></div>

      <div className="grid grow gap-4">
        <Routes>
          <Route path="*" element={<Site404 />} />

          <Route path="/" element={<PostsContainer />} />
          <Route path="/usersettings" element={<UserCard />} />
          <Route path="/myposts" element={<UserPosts />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
