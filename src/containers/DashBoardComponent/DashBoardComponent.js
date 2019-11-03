import React, { Component } from "react";
import classes from "./DashBoardComponent.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "../../axios";
import firebase from "../../firebase";

class DashBoardComponent extends Component {
  state = {
    title: "",
    description: "",
    price: 0,
    img: "",
    file: null,
    url: null,
    item: "",
    options: ["pins", "stickers", "phone grips", "temporary tattoos"]
  };

  handleChange = (event, name) => {
    console.log("event is", event);
    this.setState({ [name]: event.target.value });
  };
  handleFileChange = event => {
    console.log(event.target.files[0]);
    this.setState({
      file: event.target.files[0]
    });
  };

  handleItemChange = (event, name) => {
    console.log("event is", event);
    this.setState({ [name]: event.value });
  };

  handleSubmit = () => {
    const { file, item } = this.state;

    const storage = firebase.storage();
    let fetchedUrl;
    //can change to folder name depending on item selected /pins etc
    const uploadTask = storage.ref(`/images/${item}/${file.name}`).put(file);

    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      () => {
        storage
          .ref(`/images/${item}`)
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            // console.log("the url is", url);
            this.setState({ url });
          })
          .then(() => {
            const data = {
              title: this.state.title,
              description: this.state.title,
              price: this.state.price,
              type: this.state.item,
              url: this.state.url
            };

            axios
              .patch(`/${this.state.item}.json`, { [this.state.title]: data })
              .then(response => {
              	/* rerote to main after succesfull submitting*/
              	this.props.history.push("/");
                console.log(response);
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      }
    );

    // console.log("fetched url is", this.state.url);

    // const data = {
    //   title: this.state.title,
    //   description: this.state.title,
    //   price: this.state.price,
    //   type: this.state.item,
    //   id: this.state.title,
    //   url: fetchedUrl
    // };
    // axios
    //   .patch(`/${this.state.item}.json`, { [this.state.title]: data })
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(error => console.log(error));
    // .then(response => console.log(response))
    // .catch(error => console.log(error));
    // uploadTask.on();

    // upLoadTask.on("state changed", snapshot => {
    //   console.log("snapshot is", snapshot);
    // });

    // const database = firebase.database();
  };

  // const storageRef = firebase.storage().ref();

  // // const fd = new FormData();
  // // fd.append("image", this.state.file, this.state.file.name);
  // storageRef
  //   .child(this.state.file.name)
  //   .put(this.state.file)
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error));
  // const data = {
  //   title: this.state.title,
  //   description: this.state.title,
  //   price: this.state.price,
  //   type: this.state.item,
  //   id: this.state.title,
  //   url: this.state.url
  // };
  // if (this.state.title !== "") {
  //   // const { title } = this.state.title;
  //   axios
  //     .patch(`/${this.state.item}.json`, { [this.state.title]: data })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => console.log(error));

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

          <input id="input" type="file" onChange={this.handleFileChange} />
          <button onClick={this.handleSubmit}>Submit</button>
   //* I added this line*/       
          <progress value={this.state.progress} max="0"/>
        </div>
      </div>
    );
  }
}

export default DashBoardComponent;
