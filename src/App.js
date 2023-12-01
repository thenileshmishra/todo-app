import Todo from "./components/Todo";
import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [todo, setTodo] = React.useState([]);

  const handleUpdate = (item) => {
    setTodo((prev) => [item, ...prev]);
  };

  return (
    <div>
      <Todo submit={handleUpdate} />
      <List data={todo} />
    </div>
  );
}

export default App;
