import Todo from "./components/Todo";
import React, { useEffect } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [todo, setTodo] = React.useState([]);

  const handleAdd = (item) => {
    setTodo((prev) => [item, ...prev]);
    console.log(todo);
  };

  const handleDelete = (id) => {
    let temp = todo.filter((obj) => obj.id !== id);
    setTodo(temp);
  };

  useEffect(() => {
    console.log("Rohit");
  });

  return (
    <div>
      <Todo submit={handleAdd} />
      <List data={todo} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
