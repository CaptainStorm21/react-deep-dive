import React, { Component } from "react";
import TodoItems from "./ToDoItems";
import './ToDoList.css'

class TodoList extends Component {
  // We listen for the submit event on the form itself, and we call the addItem method when that event is overheard.
  // Notice that we aren’t listening for any event on the button itself. This is because our button has a type attribute set to submit.
  // This is one of those HTML trickeries in which clicking on the button whose type is submit is the equivalent of firing the submit event on the form.
  // Now it’s time to create our addItem event handler that will get called when our form gets submitted. Add the following highlighted lines
  // just above where we have our render function defined:
  constructor(props) {    
    super(props);     

    this.state = {    
      items: []  
    };

    this.addItem = this.addItem.bind(this); 
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {    
      itemArray.unshift(
        {      
          text: this._inputElement.value,      
          key: Date.now()    
        }
      );

      this.setState({      
        items: itemArray    
      });   

      this._inputElement.value = "";  
    }   
    console.log(itemArray);   
    e.preventDefault();

    // We’re overriding this event’s default behavior. The reason has to do with how form submission works. 
    //By default, when you submit a form, the page reloads and clears everything out. We definitely don’t want that. 
    //By calling preventDefault, we block the default behavior. That’s a good thing!
    }

    deleteItem(key) {  
        var filteredItems = this.state.items.filter(function (item) {    
          return (item.key !== key);  
        }); 
    
        this.setState({    
          items: filteredItems  
        });
      }
    

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          {/* Task 1 - setting up the event handlers and default form-handling behavior to allow us to add an item */}
          <form onSubmit={this.addItem}>
            {/* read the entered value from our input element and store it in our items array when the user submits it. */}
            <input ref={(a) => this._inputElement = a} 
              placeholder="enter task">
            </input>            
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} 
                  delete={this.deleteItem}/>   
      </div>
    );
  }
}
 
export default TodoList;