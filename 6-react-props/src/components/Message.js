import React from "react";

export function Message(props) {
  return (
    <div>
      <h4 className="bg-success text-white text-center p-2">
        Message Component! {props.greeting}, {props.name}
      </h4>
    </div>
  );
}

export default Message;
