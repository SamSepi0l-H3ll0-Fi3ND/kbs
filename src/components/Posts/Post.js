import React, { useContext } from "react";
import Tag from "../../ui/Tag";
import PostComment from "./PostComment";
import AddComment from "./AddComment";
import API from "../../env";
import UserContext from "../../UserContext";

const Post = ({ post, index }) => {
  const ctx = useContext(UserContext);

  const posts = post.tags.map((tag, index) => <Tag name={tag} key={index} />);

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
    console.log(comments);

    const postUpdated = [...ctx.posts];
    postUpdated[index].comments = comments;

    console.log(postUpdated);

    ctx.setPosts(postUpdated);
  };

  return (
    <div className="card card-compact w-full shadow-lg my-4 bg-base-300">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-col items-start">
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
      <div className="flex justify-start p-4">{posts}</div>
      <div className="card-body text-left">
        <p className="text-m">{post.body}</p>
      </div>
      {displayComments}
      {ctx.userData.token && <AddComment id={post.id} postIndex={index} />}

      <button className="btn btn-primary" onClick={loadMoreCommentsHandler}>
        Load more comments
      </button>
    </div>
  );
};

export default Post;
