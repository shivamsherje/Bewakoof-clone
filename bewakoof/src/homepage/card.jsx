import React from "react"
function Card(props) {
  return (
    <div style={{border:"1px solid red", width:"280px" , height:"463px"}} className="cardbox">
      <img style={{height:"380px", width:"100%"}} src={props.image} alt="poster" className="imgposter"></img>
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </div>
  );
}
export default Card;
