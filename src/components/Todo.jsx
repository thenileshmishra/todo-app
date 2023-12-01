import { Input } from "antd";
import { Button } from "antd";
import React from "react";
import uuid from "react-uuid";

function Todo({ submit }) {
  const [data, setData] = React.useState("");

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = () => {
    const obj = {
      text: data,
      id: uuid(),
    };
    submit(obj);
    setData("");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Input
        style={{ width: "400px", margin: "10px" }}
        placeholder="Add todo..."
        onChange={handleChange}
        value={data}
      />
      <Button onClick={handleSubmit} style={{ background: "#b3f5bc" }}>
        Add
      </Button>
    </div>
  );
}

export default Todo;
