import React, { useState, useContext } from "react";
import UserContext from "../store/UserContext";
import useHttp from "../hooks/useHttp";

const Search = () => {
  const ctx = useContext(UserContext);
  const [inputValue, setInputValue] = useState("");
  const [selectOption, setSelectOption] = useState("tags");

  const { isLoading, error, sendRequest } = useHttp();

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
          {/*<button onClick={clickHandler} className="btn btn-square">*/}
          {/*  <svg*/}
          {/*    xmlns="http://www.w3.org/2000/svg"*/}
          {/*    className="h-6 w-6"*/}
          {/*    fill="none"*/}
          {/*    viewBox="0 0 24 24"*/}
          {/*    stroke="currentColor"*/}
          {/*  >*/}
          {/*    <path*/}
          {/*      strokeLinecap="round"*/}
          {/*      strokeLinejoin="round"*/}
          {/*      strokeWidth="2"*/}
          {/*      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"*/}
          {/*    />*/}
          {/*  </svg>*/}
          {/*</button>*/}
        </div>
      </div>
    </div>
  );
};

export default Search;
