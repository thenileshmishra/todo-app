import Todo from "./components/Todo";
import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [todo, setTodo] = useState([]);

  const handleAdd = (item) => {
    setTodo((prev) => [item, ...prev]);
    console.log(todo);
  };

  const handleDelete = (id) => {
    let temp = todo.filter((obj) => obj.id !== id);
    setTodo(temp);
  };

  return (
    <div>
      <Todo submit={handleAdd} />
      <List data={todo} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
