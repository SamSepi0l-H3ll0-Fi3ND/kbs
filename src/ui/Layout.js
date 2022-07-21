import React, { useContext } from "react";
import UserCard from "../components/user/UserCard";
import Nav from "../components/Nav";
import UserInfo from "../components/user/UserInfo";
import PostsContainer from "../components/Posts/PostsContainer";
import AddPost from "../components/Posts/AddPost";
import PostsList from "../components/Posts/PostsList";
import SearchPost from "../components/Posts/SearchPost";
import Post from "../components/Posts/Post";

import postImg from "../assets/imgs/posts.svg";

import logoImg from "../assets/imgs/logo.svg";

import { Route, Routes, Link } from "react-router-dom";
import UserContext from "../UserContext";

const Layout = () => {
  const ctx = useContext(UserContext);

  const { token } = ctx.userData;

  return (
    <div className="p-4 flex flex-col w-full lg:flex-row min-h-screen max-h-screen">
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between gap-4 lg:flex-col">
          <img
            src={logoImg}
            className="w-32 lg:w-52 shadow-lg"
            alt="Moon Logotype"
          />
          <Nav />
        </div>
        <div className="space-y-4 mt-4">
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

      <div className="divider lg:divider-horizontal lg:order-last"></div>

      <div className="flex flex-col justify-between gap-4 lg:order-last">
        <SearchPost />
      </div>

      <div className="divider lg:divider-horizontal"></div>

      <div className="grid grow gap-4">
        <Routes>
          <Route path="/" element={<PostsContainer />} />
          <Route path="/usersettings" element={<UserCard />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
