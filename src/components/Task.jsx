import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Task({ task, deleteNote, index, editNote }) {
  return (
    <div className="task">
      <h1>{task.title}</h1>
      <p>{task.content}</p>
      <button onClick={deleteNote(index)}>
        <DeleteIcon fontSize="medium" />
      </button>
      <button onClick={editNote(index)}>
        <EditIcon fontSize="medium" />
      </button>
    </div>
  );
}
