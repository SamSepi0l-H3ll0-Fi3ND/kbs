import React from "react";
import UserCard from "../components/user/UserCard";
import PostLists from "../components/Posts/PostsList";
import AddPost from "../components/Posts/AddPost";

const Dashboard = () => {
  return (
    <div>
      <UserCard />
      <PostLists />
      <AddPost />
    </div>
  );
};

export default Dashboard;
