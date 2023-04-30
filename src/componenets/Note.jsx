import React, { useState } from "react";

function Note(props) {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(true);
  }
  return (
    <div className="note" style={{ display: click && "none" }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
