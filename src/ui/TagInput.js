import React, { useState, useEffect } from "react";

const TagInput = ({ setTags, tagValue, id, tags }) => {
  const [tagInput, setTagInput] = useState(tagValue);

  useEffect(() => {
    const newTags = [...tags];

    const intervalId = setTimeout(() => {
      newTags[id] = tagInput;
      console.log(newTags);
      setTags(newTags);
    }, 200);

    return () => clearTimeout(intervalId);
  }, [tagInput, id]);

  const onChangeHandler = (e) => {
    setTagInput(e.target.value);
  };

  return (
    <div className="badge badge-outline mt-4">
      <input
        type="text"
        placeholder="Add your tag..."
        className="badge-outline"
        onChange={(e) => onChangeHandler(e)}
        value={tagInput}
      />
    </div>
  );
};

export default TagInput;
