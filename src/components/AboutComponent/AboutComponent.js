import React from "react";
import classes from "./AboutComponent.module.css";
import SideMenu from "../SideMenu/SideMenu";
import TextComponent from "../TextComponent/TextComponent";
const aboutComponent = props => (
  <div className={classes.Layout}>
    <SideMenu />

    <div>
      <h1 className={classes.Header}>About</h1>
      <hr className={classes.Border}></hr>
      <TextComponent
        title="Twin Bear Creations"
        text="Welcome! This shop will mainly sell fantasy pin designs. Most designs
        will be Disney inspired. Some will be anime pins. Also will have various
        accessories and other items."
      />
      <p>Pinole, CA</p>
      <h1 className={classes.Header}>FAQ</h1>
      <hr className={classes.Border}></hr>
      <TextComponent title="Where is the store based?" text="Pinole, CA" />
      <TextComponent
        title="What is this store's return and exchange policy?"
        text="No returns or exchanges."
      />
      <TextComponent
        title="Do you accept orders placed outside of the US?"
        text="Yes, however once it's out of my hands, I will no longer be responsible for the item once it's been shipped."
      />
      <TextComponent
        title="How long will it take to receive my order?"
        text="Once shipped most domestic orders take anywhere from 2 to 10 business days to arrive depending on the efficiency of your local postal service. International shipping delivery times may vary between 2 and 12 weeks."
        note="Note: Most orders that you may buy in presale may take from either a couple months or longer due to the process of how it's made. We want the best product possible with great quality and it will not be rushed."
      />

      {/* <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
    <p>Paragraph 4</p> */}
    </div>
  </div>
);

export default aboutComponent;
