import React from "react";
import "./App.css";
import SearchBar from  './SearchBar'

//convert from function component into class component
class App extends React.Component {
  //create a callback function that will drive the data from a form from SearchBar back into parent
  onSearchSubmit(term){
    console.log(term)
  }

  render() {
    return (
      <div className = "margin-center container">
        <SearchBar onSubmit = {this.onSearchSubmit} />
      </div>
    )
  }
}

export default App;


/*
const App = () => {
  return (
    <div className = "margin-center container">
      <SearchBar />
    </div>
  );
};
*/