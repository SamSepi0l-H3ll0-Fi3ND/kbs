import React, { useState } from "react";

const Checkbox = ({ text, addTagHandler }) => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="label cursor-pointer">
      <span className="label-text">{text}</span>
      <input
        type="checkbox"
        className="checkbox"
        value={text}
        checked={checked}
        onClick={() => setChecked((c) => !c)}
        onChange={addTagHandler}
      />
    </label>
  );
};

export default Checkbox;
