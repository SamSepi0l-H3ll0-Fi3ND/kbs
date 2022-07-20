import React from "react";
import ProfileCard from "../components/ProfileCard";
import Nav from "../components/Nav";
import UserInfo from "../components/UserInfo";
import PostsContainer from "../components/Posts/PostsContainer";
import AddPost from "../components/Posts/AddPost";
import PostsList from "../components/Posts/PostsList";
import SearchPost from "../components/Posts/SearchPost";
import Post from "../components/Posts/Post";

import postImg from "../assets/imgs/posts.svg";

const Layout = () => {
  return (
    // <div className="p-4 flex gap-4 max-h-screen overflow-hidden ">
    //   <div className="flex justify-between flex-col gap-4">
    //     <div>
    //       <h1 className="mb-4">Logo</h1>
    //       <Nav />
    //     </div>
    //     <UserInfo />
    //   </div>
    //
    //   <div className="flex flex-col gap-4 grow">
    //     <div className="flex flex-col gap-4 ">
    //       <SearchPost />
    //       <AddPost />
    //     </div>
    //
    //     <div className="overflow-y-scroll scrollbar-hide">
    //       <PostsList />
    //     </div>
    //   </div>
    //
    //   <div>Tutaj jakieś inne pierdoły</div>
    // </div>

    <div className="p-4 flex flex-col w-full lg:flex-row max-h-screen">
      <div className="flex flex-col justify-between gap-4">
        <div className="space-y-4">
          <h1>Logo</h1>
          <Nav />
        </div>

        <UserInfo />
      </div>

      <div className="divider m-0 lg:divider-horizontal"></div>

      <div className="grid grow flex-grow gap-4">
        <AddPost />
        <div className="divider m-0"></div>
        <PostsList />
      </div>

      <div className="divider lg:divider-horizontal"></div>

      <div className="flex flex-col justify-between gap-4">
        <SearchPost />
      </div>
    </div>
  );
};

export default Layout;
