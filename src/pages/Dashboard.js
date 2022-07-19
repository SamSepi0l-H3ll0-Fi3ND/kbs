import React from "react";
import ProfileCard from "../components/ProfileCard";
import PostLists from "../components/Posts/PostsList";
import AddPost from "../components/Posts/AddPost";

const Dashboard = () => {
  return (
    <div>
      <ProfileCard />
      <PostLists />
      <AddPost />
    </div>
  );
};

export default Dashboard;
