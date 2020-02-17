import React from "react";
import axios from 'axios';

import "./App.css";
import SearchBar from  './SearchBar'

//convert from function component into class component
class App extends React.Component {

//set the state
  state = {
    //if result is expected to be an array use empty array
    images: []
  };

  //create a callback function that will drive the data from a form from SearchBar back into parent
 onSearchSubmit = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query : term},
      headers: {
        Authorization: 'Client-ID xF3boNWFEMwXSnLb7BIPVXU0kFdC8a51zQJBDMOouCY' 
      }
    });
  
    //console.log(this);
    this.setState({ images: response.data.results });

    //lists 10 results in console.log
    // console.log(response.data.results);
  }

  render() {
    return (
      <div className = "margin-center container">
        <SearchBar onSubmit = {this.onSearchSubmit} />
        Found: {this.state.images.length} images
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

/*
//great with promise
class App extends React.Component {
  //create a callback function that will drive the data from a form from SearchBar back into parent
  onSearchSubmit(term){
    // console.log(term)
    //get the images in HXR network tab in dev tools
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query : term},
      headers: {
        Authorization: 'Client-ID xF3boNWFEMwXSnLb7BIPVXU0kFdC8a51zQJBDMOouCY' 
      }
    }).then((response) => {
        console.log(response.data.results);
    })
  }
*/