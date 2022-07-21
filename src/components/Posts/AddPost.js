import React, { useContext, useState } from "react";
import UserContext from "../../UserContext";
import API from "../../env";

const AddPost = () => {
  const ctx = useContext(UserContext);

  const [postInput, setPostInput] = useState("");

  const addPostHandler = async (e) => {
    e.preventDefault();

    const resp = await fetch(`${API}/api/posts/add`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${ctx.userData.token}`,
      },
      body: JSON.stringify({
        body: postInput,
        tags: [],
      }),
    });

    console.log(resp);
  };

  return (
    <form onSubmit={addPostHandler}>
      <div className="card w-full bg-base-300 p-4 shadow-lg">
        <div className="form-control">
          <div className="input-group max-h-16">
            <textarea
              placeholder="Post me!"
              className="textarea w-full"
              style={{ resize: "none" }}
              onChange={(e) => setPostInput(e.target.value)}
            />
            <button className="btn min-h-16 btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-4 h-4 mr-2 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
