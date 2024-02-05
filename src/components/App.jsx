import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Task from "./Task";
import Input from "./Input";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState({ title: "", content: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const addNote = (param) => {
    if (isEdit) {
      setTasks((prevTasks) => {
        prevTasks[editIndex] = param;
        return prevTasks;
      });
    } else {
      setTasks((prevTasks) => {
        return [...prevTasks, param];
      });
    }
    setIsEdit(false);
  };
  const deleteNote = (index) => () => {
    setTasks((prevTasks) => {
      return prevTasks.filter((ele, i) => i !== index);
    });
  };
  const editNote = (index) => () => {
    setInput(tasks[index]);
    setIsEdit(true);
    setEditIndex(index);
  };
  return (
    <div>
      <Header />
      <Input
        addNote={addNote}
        input={input}
        setInput={setInput}
        isEdit={isEdit}
      />
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            deleteNote={deleteNote}
            editNote={editNote}
            index={index}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
