import React from "react";

// import "./Card.css";
function Card(props) {
  //   const classes = ;
  return (
    <div id={props.id} className={props.className}>
      {props.children}
    </div>
  );
}

export default Card;
