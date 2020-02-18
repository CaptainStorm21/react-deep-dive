import React from "react";

export function Conditional(props) {
  if (props.name === "Sebastian") {
    return (
      <h4 className="bg-secondary text-white p-2">{props.name} is Here!</h4>
    );
  } else {
    return (
      <h4 className="bg-warning text-white text-center p-2">
        Good Morning! {props.name}
      </h4>
    );
  }
}

export default Conditional;
