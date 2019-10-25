import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";

const sideMenu = props => (
  <ListGroup className={classes.SideMenu}>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store" exact activeStyle={{ backgroundColor: "red" }}>
        Shop All >
      </NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink
        to="/store/diamondpaintings"
        activeStyle={{ backgroundColor: "red" }}
      >
        Diamond Paintings
      </NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/pins" activeStyle={{ backgroundColor: "red" }}>
        Pins
      </NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/phonegrips" activeStyle={{ backgroundColor: "red" }}>
        Phone Grips
      </NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/stickers" activeStyle={{ backgroundColor: "red" }}>
        Stickers
      </NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink
        to="/store/temporarytattoos"
        activeStyle={{ backgroundColor: "red" }}
      >
        Temporary Tattoos
      </NavLink>
    </ListGroup.Item>
    {/* <ListGroup.Item className={classes.ListItem}>
      <NavLink className={classes.Link}>Diamond Paintings</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink className={classes.Link}>Pins</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink className={classes.Link}>Phone Grips</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink className={classes.Link}>Stickers</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink className={classes.Link}>Temporary Tattoos</NavLink>
    </ListGroup.Item> */}
    {/* <NavLink>data</NavLink> <NavLink>data</NavLink> <NavLink>data</NavLink> */}
  </ListGroup>
);

export default sideMenu;
