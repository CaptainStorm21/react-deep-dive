import React, { Component } from "react";

class SearchBar extends Component {
  //initiationg state then on Change we update the 'term" property
  state = { term: "" };
  // default value    state = { term: "Time to find a new image!" };

  // onFormSubmit(event) {
  //   //One of the special features of arrow functions is that they automatically bind the value of this for
  //   //all the code inside the function.
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }

  // //arrow function
  // onFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }
  
  onFormSubmit(event){
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui  segment ">
        <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
          <div className=" field">
            <label>Find an Image! </label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              //onChange={e => this.setState({ term: e.target.value.toLocaleUpperCase() })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

/*
            {/* <input type="text" onChange={this.onInputChange} />
            {/* <input type="text" onChange = {(event) => {
                console.log(event.target.value)
            }}  /> }}
*/

//   uncontroled
//     onInputChange(event) {
//     console.log(event.target.value);
//   }
//
// onInputChange(event) {  }
// So pretty clear anytime that we type into the input on input change the method we just defined is going
// to be called automatically and we will be given whatever which is typed into that input.
//  console.log(event.target.value);

/*
  onFormSubmit(event) {
    //prevents automatic submission on enter and stops component from refreshing
    event.preventDefault();
    // error something like I cannot access the property state on the value undefined.
    //console.log(this.state.term);
    console.log(this.state.term);
  }

*/

/*
solution

onFormSubmit = event => {
    event.preventDefault ();
    console.log(this.state.term);
}

<form onSubmit = { this.onFormSubmit} className = "ui form">
  <input type = "text" value = {this.state.term} onChange = { e => { this.setState ({ term: e.target.value})}} />
</form>

*/