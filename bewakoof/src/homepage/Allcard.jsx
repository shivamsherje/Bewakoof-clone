import React from "react";
import Data from "./Data";
import Card from "./card";
const Allcard = () => {
  return (
    <div
      style={{
        lineHeight: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(3,270px)",
        width: "100%",
        rowGap: "10px",
        columnGap: "50px",
        margin: "auto",
        justifyContent:"center",
        backgroundColor:"#F0F8FF"
      
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
};

export default Allcard;
