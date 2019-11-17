import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import StoreComponent from "./containers/StoreComponent/StoreComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import Footer from "./components/Footer/Footer";
import Contact from "./containers/ContactComponent/ContactComponent";
import SelectedItemComponent from "./containers/SelectedItem/SeletectedItem";
import AccountComponent from "./components/AccountComponent/AccountComponent";
import firebase from "./firebase";
import { Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import DashBoardComponent from "./containers/DashBoardComponent/DashBoardComponent";
import ShoppingCart from "./components/ShoppingCartComponent/ShoppingCartComponent";
import ProtectedRoute from "./components/ProtectedRoute";
// import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    authenticated: false,
    cart: [
      // {
      //   description: "Disneys Pin Lot",
      //   price: "6",
      //   title: "Disneys Pin Lot",
      //   type: "pins",
      //   url:
      //     "https://firebasestorage.googleapis.com/v0/b/twin-b…=media&token=1a581a7d-2440-41c3-a4d6-a5ea1862de48"
      // }
      // {
      //   description: "Disneys Pin Lot",
      //   price: "36",
      //   title: "Disneys Pin Lot",
      //   type: "pins",
      //   url:
      //     "https://firebasestorage.googleapis.com/v0/b/twin-b…=media&token=1a581a7d-2440-41c3-a4d6-a5ea1862de48"
      // }
    ],

    user: null
  };

  AddItem = item => {
    // console.log("add item was pressed", item);
    const copyState = { ...this.state };

    if (!copyState.cart.includes(item)) {
      copyState.cart.push(item);
    }

    this.setState({ cart: copyState.cart });
  };

  deleteItem = key => {
    // console.log("item is", item);
    // console.log("item deletion was triggered");

    const copyCart = [...this.state.cart];

    //may need to adjust after adding ids
    const removedItem = copyCart.filter(element => element.title !== key);
    // console.log("remoed item", removedItem);
    // console.log("copy cart is", copyCart);
    // copyCart.filter(elemn)
    // const removedItem = copyCart.filter(element => console.log(

    // ));
    // console.log(key);
    // console.log("delete itemw as pressed");

    this.setState({ cart: removedItem });
  };
  // componentWillMount() {
  //   this.removeAuthListener = firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({
  //         authenticated: true
  //       });
  //     } else {
  //       this.setState({
  //         authenticated: false
  //       });
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.removeAuthListener();
  // }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticated => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
            user: firebase.auth().currentUser
          }))
        : this.setState(() => ({
            authenticated: false,
            user: null
          }));
    });
  }
  render() {
    // console.log("this state", this.state);

    // const user = firebase.auth().currentUser;

    // console.log("the user is", user);
    // if (this.state.authenticated) {
    //   console.log(this);
    // }

    return (
      // <BrowserRouter>
      <div className="App">
        <Navbar
          authenticated={this.state.authenticated}
          cartSize={this.state.cart.length}
        />
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route
            path="/store/:type/:title"
            exact
            render={props => (
              <SelectedItemComponent AddItem={this.AddItem} {...props} />
            )}
            // component={SelectedItemComponent}
            // AddItem={this.AddItem}
          />
          <Route path="/store" component={StoreComponent} />
          <Route path="/store/stickers" component={StoreComponent} />
          <Route path="/store/pins" component={StoreComponent} />
          {/* <Route path="/account" component={AccountComponent} /> */}
          <Route path="/contact" component={Contact} />

          <Route
            path="/cart"
            render={props => (
              <ShoppingCart
                cart={this.state.cart}
                user={this.state.user}
                delete={item => this.deleteItem(item)}
              />
            )}
          />
          <Route path="/account" component={AccountComponent} />
          {/* <ProtectedRoute
            authenticated={!this.state.authenticated}
            path="/account"
            component={AccountComponent}
          /> */}
          {/* <Route path="/dashboard" component={DashBoardComponent} /> */}
          <ProtectedRoute
            authenticated={this.state.authenticated}
            path="/dashboard"
            component={DashBoardComponent}
          />
        </Switch>

        <Footer />
      </div>
      // </BrowserRouter>
    );
  }
}

export default App;
