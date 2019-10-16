import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import StoreComponent from "./containers/StoreComponent/StoreComponent";
import AboutComponent from "./components/AboutComponent/AboutComponent";

import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/" exact component={HomeComponent} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/store" component={StoreComponent} />
      </Switch>
    </div>
  );
}

export default App;
