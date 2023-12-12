import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

function List({ data, handleDelete }) {
  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <div
        style={{
          border: "1px solid",
          borderRadius: "5px",
        }}
      >
        {data.map((item, id) => (
          <div
            key={id}
            style={{
              width: "450px",
              margin: "10px 20px",
              background: "cyan",
              padding: "5px",
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>{item.text}</span>
            <span>{item.time.toLocaleTimeString()}</span>
            <DeleteOutlined
              onClick={() => {
                handleDelete(item.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
