import React, { useState } from "react";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import AddIcon from "@mui/icons-material/Add";
export default function Input({ addNote, input, setInput, isEdit }) {
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };
  const handleSubmit = (event) => {
    let obj = { title: input.title, content: input.content };
    addNote(obj);
    setInput({ title: "", content: "" });
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          value={input.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Write the task..."
          rows="3"
          value={input.content}
          onChange={handleChange}
        />
        <button>
          {isEdit ? (
            <UpgradeIcon fontSize="large" />
          ) : (
            <AddIcon fontSize="large" />
          )}
        </button>
      </form>
    </div>
  );
}
