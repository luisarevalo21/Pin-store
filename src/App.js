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
import AdminComponent from "./components/AdminNavigationComponent/AdminNavigationComponent";

import { Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
// import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Navbar />
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
        <Route path="/admin" component={AdminComponent} />

        {/* <Route path="/store/" component={StoreComponent} /> */}

        {/* <Route path="/store/pins" component={StoreComponent} /> */}
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </div>
    // </BrowserRouter>
  );
}

export default App;
