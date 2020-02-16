import React from "react";
import CommentDetail from "./Components/CommentDetail";

const App = () => {
  return (
    <div className="ui container comments margin-body">
      <div className="border-around">
        <CommentDetail author="Max" timeAgo="January 11, 2019 1:03pm" />
      </div>
      <div className="border-around">
        <CommentDetail author="Alex" timeAgo="January 12, 2019 1:03pm" />
      </div>
      <div className="border-around">
        <CommentDetail author="Sebastian" timeAgo="January 10, 2019 12:03pm" />
      </div>
      <div className="border-around">
        <CommentDetail author="Phantom" timeAgo="March 10, 2010 12:03pm" />
      </div>
    </div>
  );
};

export default App;
