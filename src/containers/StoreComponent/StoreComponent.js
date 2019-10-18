import React, { Component } from "react";
import classes from "./StoreComponent.module.css";
import image from "../../assets/images/HomeImages/PhoneGrips.jpg";

import soraImage from "../../assets/images/StoreImages/soraSticker.jpg";
import SideMenu from "../../components/SideMenu/SideMenu";
import CardComponent from "../../components/CardComponent/CardComponent";
import axios from "../../axios";
class StoreComponent extends Component {
  state = {
    products: null,
    pins: null
  };

  componentDidMount() {
    axios
      .get("/products.json")
      .then(response => {
        console.log(response.data);
        this.setState({ products: response.data });
      })
      .catch(error => console.log(error));
    axios
      .get("/pins.json")
      .then(response => {
        console.log(response.data);
        this.setState({ pins: response.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    let items = null;
    // console.log(this.state.products.length);
    if (this.state.products !== null && this.state.pins !== null) {
      console.log("inside if");
      const { pins } = this.state;
      // console.log(this.state.pins);
      const keys = Object.keys(this.state.products.pins);
      console.log(this.state.pins);

      items = keys.map(element => (
        <CardComponent
          key={Math.random()}
          title={pins[element].title}
          image={soraImage}
          price={pins[element].price}
        />
      ));

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
