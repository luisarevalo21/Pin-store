import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import classes from "./SideMenu.module.css";
import { NavLink } from "react-router-dom";

const sideMenu = props => (
  <ListGroup className={classes.SideMenu}>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/shopall" activeClassName={classes.active}>
        Shop All >
      </NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/diamondpaintings">Diamond Paintings</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/pins">Pins</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/phonegrips">Phone Grips</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/stickers">Stickers</NavLink>
    </ListGroup.Item>
    <ListGroup.Item className={classes.ListItem}>
      <NavLink to="/store/temporarytattoos">Temporary Tattoos</NavLink>
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
