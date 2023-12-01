import React from "react";

function List({ data }) {
  console.log(data);
  return (
    <div>
      {data.map((item, id) => (
        <div key={id} style={{ width: "100px" }}>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default List;
