import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeComponent from "./components/HomeComponent/HomeComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomeComponent />
    </div>
  );
}

export default App;
