import React from "react";
import "./App.css";

//chapter 1 - import props
import Message from "./components/Message";
import Conditional from "./components/Conditional";
import ArrayLoop from "./components/ArrayLoop";

//This is an example of a stateless component, and it is just about as simple as a component can be:
//a function that returns content that React will display to the user, which is known as rendering.

export function App() {
  const visitor = "React Developers";
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">
        Hello, {visitor}
      </h1>
      <hr />
      <h4 className=" text-center ">Props without conditionals</h4>
      <Message greeting="Hello" name="Bob" />
      <Message greeting="Hola" name={"Alice" + "Smith"} />
      <Message />
      <hr />
      <h4 className="text-center ">Props with conditionals</h4>
      <Conditional name="Robert" />
      <Conditional name="Sebastian" />
      <hr />
      <h4 className="text-center ">Looping through props</h4>
      <ArrayLoop names={["Bob", "Alice", "Dora"]} />
    </div>
  );
}

export default App;
