import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import StoreComponent from "./containers/StoreComponent/StoreComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import Footer from "./components/Footer/Footer";
import Contact from "./containers/ContactComponent/ContactComponent";
import SelectedItemComponent from "./containers/SelectedItem/SeletectedItem";

import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route
          path="/store/:id:elementKey"
          exact
          component={SelectedItemComponent}
        />

        <Route path="/store" component={StoreComponent} />

        {/* <Route path="/store/pins" component={StoreComponent} /> */}
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
