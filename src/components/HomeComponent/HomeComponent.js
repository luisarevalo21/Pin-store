import React from "react";
import TextImageBlock from "../TextImageBlock/TextImageblock";
import PhoneGrips from "../../assets/images/HomeImages/PhoneGrips.jpg";
import PinImage from "../../assets/images/HomeImages/PinImage.jpg";
import StickerImage from "../../assets/images/HomeImages/KH_Kairi_Chibi_Sticker.jpg";
import TemporaryTattoos from "../../assets/images/HomeImages/TemporaryTattoos.jpg";
import classes from "./HomeComponent.module.css";

const homeComponent = props => {
  return (
    <div className={classes.Layout}>
      {/* <p>Home image </p> */}

      <div>
        <TextImageBlock
          text="Beautiful pins"
          title="Pins"
          image={PinImage}
          direction="left"
        />
        {/* <div>text</div> */}
        <TextImageBlock
          text="Beautiful stickers"
          title="Stickers"
          image={StickerImage}
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
          title="Temporary Tattoos"
          image={TemporaryTattoos}
          direction="right"
        />
      </div>
    </div>
  );
};

export default homeComponent;
