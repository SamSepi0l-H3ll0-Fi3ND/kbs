import React, { useContext, useState } from "react";
import UserContext from "../../UserContext";

const AddPost = () => {
  const ctx = useContext(UserContext);

  const [postInput, setPostInput] = useState("");

  const addPostHandler = async (e) => {
    e.preventDefault();

    await fetch("http://192.168.0.125:8000/api/posts/add", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${ctx.userData.token}`,
      },
      body: JSON.stringify({
        body: postInput,
      }),
    });
  };

  return (
    <form onSubmit={addPostHandler}>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <textarea
            className="textarea textarea-primary min-h-16"
            placeholder="Post me!"
            style={{ resize: "none" }}
            onChange={(e) => setPostInput(e.target.value)}
          />
          <div className="card-actions justify-end">
            <button type="submit" className="btn btn-primary">
              Post!
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
