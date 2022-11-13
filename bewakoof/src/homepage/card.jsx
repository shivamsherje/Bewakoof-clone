import React from "react";
function Card(props) {
  return (
    <div style={{ width: "300px", height: "405px" }} className="cardbox">
      <img
        style={{ height: "330px", width: "100%" }}
        src={props.image}
        alt="poster"
        className="imgposter"
      ></img>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}
export default Card;
