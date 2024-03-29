import React, { useContext } from "react";
import Tag from "../../ui/Tag";
import PostComment from "./PostComment";
import AddComment from "./AddComment";
import API from "../../env";
import UserContext from "../../store/UserContext";
import PostsContext from "../../store/PostsContext";

const Post = ({ post, index, userPost }) => {
  const userContext = useContext(UserContext);
  const postsContext = useContext(PostsContext);

  const tags = post.tags.map((tag, index) => <Tag name={tag} key={index} />);

  const comments = post.comments.map((comment) => (
    <PostComment id={comment.id} key={comment.id} comment={comment} />
  ));

  const displayComments =
    comments.length > 0 ? (
      <div>
        <div className="divider p-4 m-0">Comments</div>
        <div className="flex flex-col items-start p-4">{comments}</div>
      </div>
    ) : null;

  const loadMoreCommentsHandler = async () => {
    const resp = await fetch(`${API}/api/posts/${post.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        postId: post.id,
      }),
    });
    const { comments } = await resp.json();

    const postUpdated = [...postsContext.posts];
    postUpdated[index].comments = comments;

    postsContext.setPosts(postUpdated);
  };

  const deletePostHandler = async (postId) => {
    await fetch(`${API}/api/posts/${postId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${userContext.userData.token}`,
      },
      body: JSON.stringify({
        postId,
      }),
    });

    const userPosts = [...postsContext.userPosts].filter(
      (post) => post.id !== postId
    );
    postsContext.setUserPosts(userPosts);
  };

  return (
    <div className="card card-compact w-full shadow-lg mb-4 bg-base-300">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col items-start">
          <div className="dropdown mb-2">
            <label tabIndex="0" className="btn-sm btn-primary rounded">
              •••
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>Zgłoś</p>
              </li>
              {userPost && (
                <li>
                  <p onClick={() => deletePostHandler(post.id)}>Usuń</p>
                </li>
              )}
            </ul>
          </div>
          <p>{post.user.name}</p>
          <p className="text-sm">{post.created_at.slice(0, 10)}</p>
        </div>
        <div className="avatar w-16">
          <div className=" mask mask-squircle">
            <img src={`${API}${post.user.avatar_url}`} alt="User Avatar" />
          </div>
        </div>
      </div>
      <figure>
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="flex justify-start p-4">{tags}</div>
      <div className="card-body text-left">
        <p className="text-m">{post.body}</p>
      </div>
      {displayComments}
      {userContext.userData.token && (
        <AddComment id={post.id} postIndex={index} />
      )}
      {displayComments && (
        <button className="btn btn-primary" onClick={loadMoreCommentsHandler}>
          Load more comments
        </button>
      )}
    </div>
  );
};

export default Post;
