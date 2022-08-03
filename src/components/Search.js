import React, { useState, useContext } from "react";
import UserContext from "../store/UserContext";
import useHttp from "../hooks/useHttp";

const Search = () => {
  const ctx = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [selectOption, setSelectOption] = useState("tags");

  const { sendRequest } = useHttp();

  const searchHandler = async (e) => {
    e.preventDefault();
    try {
      if (selectOption === "tags") {
        const data = await sendRequest({ url: `/api/posts/tag/${inputValue}` });
        ctx.setPosts(data);
      }
      if (selectOption === "users") {
        const data = await sendRequest({
          url: `/api/users/search`,
          method: "POST",
          body: { str: inputValue },
        });

        console.log(data);
      }

      setInputValue("");
    } catch (e) {
      console.warn(e.message);
    }
  };

  return (
    <div className="card w-full bg-base-300 p-4 shadow-lg">
      <div className="form-control">
        <div className="input-group">
          <form onSubmit={searchHandler}>
            <input
              type="text"
              placeholder="Search…"
              className="input w-32"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <select
              className="select rounded-none"
              onChange={(e) => setSelectOption(e.target.value)}
            >
              <option defaultValue value="tags">
                #Tags
              </option>
              <option value="users">Users</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
