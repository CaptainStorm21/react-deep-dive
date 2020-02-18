import React from "react";

export function ArrayLoop(props) {
  function createInnerElements(names) {
    let arrayElems = [];
    for (let i = 0; i < names.length; i++) {
      arrayElems.push(
        <div className="bg-success text-white text-center p-2 border-margin">
          Good Evening, {`${names[i]}`}
        </div>
      );
    }
    return arrayElems;
  }
  return (
    <div>
      <h4>{createInnerElements(props.names)}</h4>
    </div>
  );
}

export default ArrayLoop;
