import React, { useState } from "react";

export default function InputArea(props) {
  const [inputText, setInputText] = useState("");
  function handleChange(event) {
    setInputText(event.target.value);
  }
  return (
    <div>
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
