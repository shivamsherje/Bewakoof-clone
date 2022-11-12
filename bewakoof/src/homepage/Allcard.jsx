import React from "react";
import Data from "./Data";
import Card from "./card";
const Allcard = () => {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        lineHeight: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(3,300px)",
        width:"60%"
      }}
    >
      {Data.map((ele) => {
        return (
          <Card
            key={ele.id}
            image={ele.image}
            title={ele.title}
            price={ele.price}
          />
        );
      })}
    </div>
  );
}

export default Allcard;
