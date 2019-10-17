import React, { Component } from "react";
import classes from "./StoreComponent.module.css";
import image from "../../assets/images/HomeImages/PhoneGrips.jpg";

import soraImage from "../../assets/images/StoreImages/soraSticker.jpg";
import SideMenu from "../../components/SideMenu/SideMenu";
import CardComponent from "../../components/CardComponent/CardComponent";

class StoreComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <section className={classes.Image}>
          {/* <img src={image} /> */}
          <p>store image will go here</p>
        </section>

        <div className={classes.Container}>
          <SideMenu />

          <div className={classes.Gallery}>
            <CardComponent title="Sora sticker" image={soraImage} price={2.0} />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />

            <CardComponent />
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
