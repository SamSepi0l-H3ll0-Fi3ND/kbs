import React, { useState, useContext } from "react";
import API from "../../env";
import UserContext from "../../store/UserContext";
import PostsContext from "../../store/PostsContext";

const AddComment = ({ id, postIndex }) => {
  const userContext = useContext(UserContext);

  const postsContext = useContext(PostsContext);

  const [commentText, setCommentText] = useState("");

  const addCommentHandler = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch(`${API}/api/posts/${id}/comments/add`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userContext.userData.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          postId: id,
          body: commentText,
        }),
      });

      const newComment = await resp.json();
      const updatedComments = [...postsContext.posts];
      updatedComments.splice(postIndex, 1, newComment);

      postsContext.setPosts(updatedComments);

      setCommentText("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="form-control p-4">
      <form onSubmit={addCommentHandler}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Add comment…"
            className="input input-bordered w-full"
            onChange={(e) => setCommentText(e.target.value)}
            value={commentText}
          />
          <button type="submit" className="btn btn-square">
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
      </form>
    </div>
  );
};

export default AddComment;
