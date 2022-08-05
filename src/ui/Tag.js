import React from "react";
import useSortPostsByTag from "../hooks/useSortPostsByTag";

const Tag = ({ name }) => {
  const loadPosts = useSortPostsByTag(name);

  return (
    <div onClick={loadPosts} className="btn btn-outline ml-1 btn-xs">
      {name}
    </div>
  );
};

export default Tag;
