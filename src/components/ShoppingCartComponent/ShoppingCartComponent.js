import React, { Component } from "react";
import ShopListItemComponent from "../ShopListItemComponent/ShopListItemComponent";
import classes from "./ShoppingCartComponent.module.css";
import Paypal from "../../containers/PaypalComponent/PaypalComponent";
// import dotenv from "dotenv";
// dotenv.config();
// console.log(process.env.REACT_APP_METEORITE_STRIKE_DATASET);
const CLIENT = {
  sandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX

  // production: "xxxXXX"
};

// const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";
const ENV = "sandbox";

class ShopingCartComponent extends Component {
  state = {
    cart: this.props.cart,
    itemTotal: null
  };

  // componentDidMount() {
  //   console.log(this.props);
  // }

  // componentDidMount() {
  //   this.setState({ cart: this.props.cart });
  // }
  // componentDidUpdate() {
  //   // this.props.cart = this.state.cart;
  // }

  // componentDidUpdate() {}
  Checkout = () => {
    console.log("checkout was pressed");
  };

  static getDerivedStateFromProps(props, state) {
    console.log("inside get dervied");
    if (props.cart.length !== state.cart.length) {
      console.log("inside if statement");
      return {
        cart: props.cart
      };
    }
    return null;
  }
  // deleteItem = key => {
  //   const copyCart = [...this.state.cart];

  //   //may need to adjust after adding ids
  //   const removedItem = copyCart.filter(element => element.title !== key);
  //   // console.log("remoed item", removedItem);
  //   // console.log("copy cart is", copyCart);
  //   // copyCart.filter(elemn)
  //   // const removedItem = copyCart.filter(element => console.log(

  //   // ));
  //   // console.log(key);
  //   // console.log("delete itemw as pressed");

  //   this.setState({ cart: removedItem });
  // };
  render() {
    // console.log(this.props);

    const onSuccess = (payment, actions) => {
      console.log("Successful payment!", payment);
      // console.log("actions", actions.order.get());
      // this.setState({ cart: null, itemTotal: null });
      // console.log(actions.payment.get());
      window.alert("Thank you for your purchase!");
      // this.setState({ cart: null, itemTotal: null });
      // this.props.success();
      // this.props.history.push("/");
    };
    const onError = error =>
      console.log("Erroneous payment OR failed to load script!", error);
    const onCancel = data => console.log("Cancelled payment!", data);

    let itemTotal = 0;
    let items = <h3>Your cart is empty</h3>;
    if (this.state.cart.length !== 0) {
      items = this.state.cart.map(element => {
        itemTotal += Number(element.price);
        return (
          <ShopListItemComponent
            key={element.title}
            image={element.url}
            title={element.title}
            price={"$" + element.price}
            delete={() => this.props.delete(element.title)}
          />
        );
      });
    }

    return (
      <>
        <h3>Your Shopping Cart</h3>
        <div style={{ display: "flex" }}>
          <div className={classes.Item}>
            {items}
            <hr className={classes.Border}></hr>

            {/* <div className={classes.PriceInfo}> */}
            {/* <div> content left</div>

            <div className={classes.Total}> */}
            <div className={classes.Row}>
              <p className={classes.TotalText}>Items Total: </p>
              <span className={classes.Total}>${itemTotal}.00</span>
            </div>
            <div className={classes.Row}>
              <p className={classes.TotalText}>Tax: </p>
              <span className={classes.Total}>$0.00</span>
            </div>
            <div className={classes.Row}>
              <p className={classes.TotalText}>Total: </p>
              <span className={classes.Total}>${itemTotal}.00</span>
            </div>
          </div>
          <div className={classes.Checkout}>
            <h4>Cart Total</h4>
            <p>${itemTotal}</p>
            <button onClick={this.Checkout}>Checkout</button>
            <Paypal
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={"USD"}
              total={100}
              onSuccess={onSuccess}
              cart={this.state.cart}
              // onError={onError}
              // onCancel={onCancel}
            />
          </div>
          {/* </div> */}
        </div>
      </>
    );
  }
}

{
  /* </div>
      </div> */
}

export default ShopingCartComponent;
