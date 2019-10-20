import React, { Component } from "react";
import classes from "./SelectedItem.module.css";
import axios from "../../axios";
import firebase from "firebase";
// import firebase from "../../config";

// import imageAxios from "axios";
// const storage = firebase.storage().ref();

const config = {
  apiKey: "AIzaSyCr9VbKjbCIITEobvKJEKY9gSNsZiJ6xjs",
  authDomain: "twin-bear-creations.firebaseapp.com",
  storageBucket: "twin-bear-creations.appspot.com"
};

firebase.initializeApp(config);
const storage = firebase.storage().ref();

class SelectedItem extends Component {
  state = {
    selectedItem: null,
    selectedImage: null
  };

  componentDidMount() {
    console.log(this.props.match.params);

    // console.
    const { title, type } = this.props.match.params;

    console.log("the id is", title);
    const typeOfProduct = type + "s";

    axios
      .get(`/${typeOfProduct}/${title}.json`)
      .then(response => this.setState({ selectedItem: response.data }))
      .catch(error => console.log(error));

    // axios
    //   .get(`/${type}.json`)
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
    // axios
    //   .get(`/pins/${this.props.match.params.elementKey}.json`)
    //   .then(response => this.setState({ selectedItem: response.data }))
    //   .catch(error => console.log(error));

    storage
      .child(`${title}.jpg`)
      .getDownloadURL()
      .then(url => this.setState({ selectedImage: url }))
      .catch(error => console.log(error));
    // firebase
    //   .child("soraSticker.png")
    //   .getDownloadURL()
    //   .then(url => {
    //     this.setState({ selectedItem: url });
    //   });

    // imageAxios
    //   .get("twin-bear-creations.appspot.com/soraSticker.jpg")
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
  }
  render() {
    // console.log(this.props);
    const { selectedItem } = this.state;

    console.log(selectedItem);
    let displayedItem = null;
    if (this.state.selectedItem !== null && this.state.selectedImage !== null) {
      console.log("inside if");
      displayedItem = (
        <>
          <img src={this.state.selectedImage} className={classes.Image} />

          <div className={classes.Card}>
            <h3>{selectedItem.title}</h3>
            <p className={classes.Price}>{selectedItem.price}</p>
            <h3>Description</h3>
            <p>{selectedItem.description}</p>
          </div>
        </>
      );
      // displayedItem =(<p>Image will go here</p>
      //       <h3>{}</h3>
      //      )
    }

    return <div className={classes.Item}>{displayedItem}</div>;
  }
}

export default SelectedItem;

// const selectedItemComponent = props => <div>{props.params.id} </div>;

// export default selectedItemComponent;
