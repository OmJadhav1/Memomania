import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    des: "",
  });

  function handleNote(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      des: "",
    });
  }
  return (
    <div>
      <form>
        <input
          onChange={handleNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleNote}
          name="des"
          placeholder="Take a note..."
          rows="3"
          value={note.des}
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
