import React, { useState, useEffect, useRef } from "react";

const ToDoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div className="toDoForm">
      <form className="toDoFormContainer" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              className="toDoInput edit"
              type="text"
              placeholder="Update your item"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="toDoButton edit">Update</button>
          </>
        ) : (
          <>
            <input
              className="toDoInput"
              type="text"
              placeholder="Add a todo"
              value={input}
              name="text"
              onChange={handleChange}
              ref={inputRef}
            />
            <button className="toDoButton">Add todo</button>
          </>
        )}
      </form>
    </div>
  );
};

export default ToDoForm;
