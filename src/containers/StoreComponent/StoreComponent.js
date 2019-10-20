import React, { Component } from "react";
import classes from "./StoreComponent.module.css";
import image from "../../assets/images/HomeImages/PhoneGrips.jpg";

import soraImage from "../../assets/images/StoreImages/soraSticker.jpg";
import SideMenu from "../../components/SideMenu/SideMenu";
import CardComponent from "../../components/CardComponent/CardComponent";
import axios from "../../axios";
// import { Link, Redirect } from "react-router-dom";

class StoreComponent extends Component {
  state = {
    products: null,
    pins: null,
    stickers: null,
    phoneGrips: null
  };

  componentDidMount() {
    // console.log(this.props);
    axios
      .get("/products.json")
      .then(response => {
        // console.log(response.data);
        this.setState({ products: response.data });
      })
      .catch(error => console.log(error));
    axios
      .get("/pins.json")
      .then(response => {
        // console.log(response.data);
        this.setState({ pins: response.data });
      })
      .catch(error => console.log(error));
    axios
      .get("/stickers.json")
      .then(response => {
        // console.log(response.data);
        this.setState({ stickers: response.data });
      })
      .catch(error => console.log(error));
  }
  handleClick = (title, type) => {
    console.log("the type is", title);
    this.props.history.push(`${this.props.match.url}/${type}/${title}`);
    // console.log(this.props.location);

    // return <Link to="/store/item" />;
  };

  // componentDidUpdate(){

  // }

  render() {
    console.log(this.state.products);
    let items = <div>No items to dispaly </div>;
    // console.log(this.props);
    // console.log(this.state.products.length);
    if (
      this.state.products !== null &&
      this.state.pins !== null &&
      this.state.stickers !== null
    ) {
      // console.log("inside if");
      const { pins, stickers } = this.state;

      const combined = { ...pins, ...stickers };

      console.log("combined is ", combined);
      // console.log(this.state.pins);
      const keys = Object.keys(combined);
      // console.log(this.state.pins);
      items = keys.map(element => {
        console.log("the element is ", element);
        // <Link to="/store/item">
        return (
          <CardComponent
            clicked={() =>
              this.handleClick(combined[element].title, combined[element].type)
            }
            key={Math.random()}
            title={combined[element].title}
            image={soraImage}
            price={combined[element].price}
            // type={combined[element].type}
          />
        );

        // </Link>
      });

      // console.log(values);
      // values.map(element => console.log(element.price));
      // console.log(values);
      // keys.map(element => {
      //   console.log(element);
      //   // console.log(values[element]);
      //   // console.log(pins[element]);
      // });
      // console.log(keys);

      // keys.map(element => {
      //   console.log(pins[element]);
      // });
      // axios.get("./pins.json").then(response => console.log(response.data));
      // console.log(keys);
      // console.log(keys);
      // keys.map(element => {
      //   // axios.get("./pins")
      //   // console.log(element);
      //   axios.get(`./${element}.json`).then(response => {
      //     console.log(element);

      //     console.log(Object.keys(response.data));
      //   });
      // });

      //   )

      // Object.keys(this.state.products).map(element => console.log(element));

      // console.log(this.state.products.keys());
    }
    return (
      <>
        <section className={classes.Image}>
          {/* <img src={image} /> */}
          <p>store image will go here</p>
        </section>

        <div className={classes.Container}>
          <SideMenu />

          <div className={classes.Gallery}>
            {items}
            {/* <CardComponent title="Sora sticker" image={soraImage} price={2.0} /> */}
            {/* <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />

              <CardComponent /> */}
          </div>

          {/* <aside className={classes.Aside}>
          <a>Phone grips</a>
          <a>Stickers</a>
          <a>Pins</a>
          <a>Temporary Tattoos</a>
        </aside> */}
        </div>
      </>
    );
  }
}

export default StoreComponent;
