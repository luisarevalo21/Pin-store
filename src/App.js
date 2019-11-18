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
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    authenticated: false
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
            authenticated: true
          }))
        : this.setState(() => ({
            authenticated: false
          }));
    });
  }
  render() {
    console.log("this state", this.state);
    return (
      // <BrowserRouter>
      <div className="App">
        <Navbar authenticated={this.state.authenticated} />
        <HeaderComponent />
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route
            path="/store/:type/:title"
            exact
            component={SelectedItemComponent}
          />
          <Route path="/store" component={StoreComponent} />
          <Route path="/store/stickers" component={StoreComponent} />
          <Route path="/store/pins" component={StoreComponent} />
          <Route path="/account" component={AccountComponent} />
          <Route path="/contact" component={Contact} />
          <Route path="/shopping_cart" component={ShoppingCart} />

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
