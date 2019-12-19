import React, { Component } from "react";
import InputComponent from "../InputComponents/InputComponents";
import axios from "../../axios";
import classes from "./RemoveItemComponent.module.css";

class RemoveItemComponent extends Component {
  state = {
    selectedItem: "",
    nameOfItem: ""
  };

  handleChange = (event, name) => {
    console.log(event);

    if (name === "selectedItem") this.setState({ [name]: event.value });
    else this.setState({ [name]: event.target.value });
  };

  removeItem = () => {
    const { nameOfItem, selectedItem } = this.state;
    axios
      .delete(`${selectedItem}/${nameOfItem}.json`)
      .then(response => {
        console.log(response);

        alert("deleted item successful");
      })
      .catch(error => console.log(error));
  };

  render() {
    console.log("this state", this.state);
    return (
      <div className={classes.Layout}>
        <h3>Remove an Item</h3>
        <InputComponent
          type="dropdown"
          value={this.state.selectedItem}
          changed={e => this.handleChange(e, "selectedItem")}
        />

        <input
          placeholder="name of item"
          onChange={e => this.handleChange(e, "nameOfItem")}
        />

        <button onClick={this.removeItem} className={classes.Button}>
          Remove
        </button>
      </div>
    );
  }
}

export default RemoveItemComponent;

// const removeItemComponent = props => (
//   <div>
//     <h3>Remove an Item</h3>
//     <InputComponent type="dropdown" />

//     <input placeholder="name of item" />
//   </div>
// );

// export default removeItemComponent;
