import React, { Component } from "react";
import classes from "./DashBoardComponent.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "../../axios";
class DashBoardComponent extends Component {
  state = {
    title: "",
    description: "",
    price: 0,
    img: "",
    item: "",
    options: ["pins", "stickers", "phone grips", "temporary tattoos"]
  };

  handleChange = (event, name) => {
    console.log("event is", event);
    this.setState({ [name]: event.target.value });
  };

  handleItemChange = (event, name) => {
    console.log("event is", event);
    this.setState({ [name]: event.value });
  };

  handleSubmit = () => {
    const data = {
      title: this.state.title,
      description: this.state.title,
      price: this.state.price,
      type: this.state.item,
      id: this.state.title
    };
    if (this.state.title !== "") {
      // const { title } = this.state.title;
      axios
        .patch(`/${this.state.item}.json`, { [this.state.title]: data })
        .then(response => {
          console.log(response);
        })
        .catch(error => console.log(error));
    }
  };
  render() {
    const { state } = this;
    console.log("the state is", state);
    return (
      <div className={classes.Layout}>
        <h2>Welcome to your dashboard</h2>

        <div className={classes.Submission} onSubmit={this.handleSubmit}>
          <h4>Submit new entry </h4>
          <input
            onChange={e => this.handleChange(e, "title")}
            placeholder="Title"
            type="text"
          />

          <input
            onChange={e => this.handleChange(e, "price")}
            placeholder="Price"
            type="number"
          />

          <Dropdown
            options={this.state.options}
            value={this.state.item}
            onChange={e => this.handleItemChange(e, "item")}
            placeholder="Select an option"
            className={classes.Dropdown}
          />

          <textarea
            onChange={e => this.handleChange(e, "description")}
            placeholder="description"
            type="text"
            // style={{ minHeight: "100px" }}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default DashBoardComponent;
