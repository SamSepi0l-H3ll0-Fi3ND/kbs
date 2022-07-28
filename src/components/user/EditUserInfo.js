import React, { useState, useContext } from "react";

import API from "../../env";
import UserContext from "../../UserContext";

const EditUserInfo = () => {
  const ctx = useContext(UserContext);
  const [description, setDescription] = useState(ctx.userData.user.description);
  const [tags, setTags] = useState([1, 2, 3]);

  const onSubmitHandler = async () => {
    try {
      const resp = await fetch(`${API}/api/user/edit`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${ctx.userData.token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          description,
          tags: tags,
        }),
      });

      const data = await resp.json();

      const userData = { ...ctx.userData };
      userData.user.tags = data.tags;
      userData.user.description = data.description;

      ctx.setUserData(userData);

      setDescription("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="card bg-base-300 shadow-lg">
      <div className="card-body flex items-center justify-center">
        <h2 className="card-title">Edit your profile!</h2>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Change description here"
            className="input input-bordered"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label className="label">
            <span className="label-text">Tags</span>
          </label>
          <div>
            <div className="badge badge-outline mt-2">
              <input
                type="text"
                placeholder="Change first tag here"
                className=" text-gray-100 badge-outline"
              />
            </div>
            <div className="badge badge-outline mt-4">
              <input
                type="text"
                placeholder="Change second tag here"
                className=" text-gray-100  badge-outline"
              />
            </div>
            <div className="badge  badge-outline mt-4">
              <input
                type="text"
                placeholder="Change third tag here"
                className=" text-gray-100 badge-outline"
              />
            </div>
            <div className="badge  badge-outline mt-4">
              <input
                type="text"
                placeholder="Change fourth tag here"
                className=" text-gray-100 badge-outline"
              />
            </div>
          </div>
        </div>
        <div className="form-control w-full max-w-xs flex items-center">
          <label className="label">
            <span className="label-text">Avatar</span>
          </label>
          <div className="indicator w-52 lg:w-max">
            <span className="indicator-item indicator-center indicator-middle badge badge-primary">
              Upload avatar +
            </span>
            <img
              className="aspect-auto "
              src="https://placeimg.com/300/150/arch"
            />
          </div>
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-primary mt-4" onClick={onSubmitHandler}>
            Confirm changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserInfo;
