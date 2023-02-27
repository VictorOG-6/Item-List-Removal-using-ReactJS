import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Hello World");

  const handleSubmit = () => {
    if (text === "Hello World") {
      setText("Hello Temi");
    } else {
      setText("Hello World");
    }
  };
  return (
    <React.Fragment>
      <div>
        <h1>{text}</h1>
        <button type="button" className="btn" onClick={handleSubmit}>
          Change Text
        </button>
      </div>
    </React.Fragment>
  );
};
export default UseStateBasics;
