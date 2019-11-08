import React, { Component } from "react";
import ShopListItemComponent from "../ShopListItemComponent/ShopListItemComponent";
import classes from "./ShoppingCartComponent.module.css";
class ShopingCartComponent extends Component {
  state = {
    cart: [],
    itemTotal: null
  };

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    let itemTotal = 0;
    let items = this.props.cart.map(element => {
      itemTotal += Number(element.price);
      return (
        <ShopListItemComponent
          key={element.title}
          image={element.url}
          title={element.title}
          price={"$" + element.price + ".00"}
        />
      );
    });

    return (
      <div>
        <h3>Your Shopping Cart</h3>

        <div className={classes.Item}>
          {items}
          <hr className={classes.Border}></hr>

          <div className={classes.PriceInfo}>
            {/* <div> content left</div>

            <div className={classes.Total}> */}
            <div className={classes.Row}>
              <p className={classes.TotalText}>Items Total: </p>
              <span className={classes.Total}>${itemTotal}.00</span>
            </div>
            <div className={classes.Row}>
              <p className={classes.TotalText}>Items Total: </p>
              <span className={classes.Total}>$0.00</span>
            </div>
            <div className={classes.Row}>
              <p className={classes.TotalText}>Items Total: </p>
              <span className={classes.Total}>${itemTotal}.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* </div>
      </div> */
}

export default ShopingCartComponent;
