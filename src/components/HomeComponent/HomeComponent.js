import React from "react";
import TextImageBlock from "../TextImageBlock/TextImageblock";
import PhoneGrips from "../../assets/images/HomeImages/PhoneGrips.jpg";
import PinImage from "../../assets/images/HomeImages/PinImage.jpg";
import TemporaryTattoos from "../../assets/images/HomeImages/TemporaryTattoos.jpg";
import classes from "./HomeComponent.module.css";

const homeComponent = props => {
  return (
    <div className="container">
      <p>Home image </p>

      <div className={classes.Block}>
        <TextImageBlock
          text="Beautiful pins"
          title="Pins"
          image={PinImage}
          direction="left"
        />
        <TextImageBlock
          text="Beautiful stickers"
          title="Stickers"
          image={PinImage}
          direction="right"
        />
        <TextImageBlock
          text="Beautiful phone grips"
          title="Phone grips"
          image={PhoneGrips}
          direction="left"
        />
        <TextImageBlock
          text="Beautiful temporary tatttoos"
          title="temporary tattoos"
          image={TemporaryTattoos}
          direction="right"
        />
      </div>
    </div>
  );
};

export default homeComponent;
