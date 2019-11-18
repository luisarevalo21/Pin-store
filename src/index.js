import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { transitions, positions, Provider as AlertProvider } from 'react-alert'
//import AlertTemplate from 'react-alert-template-basic'
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
// import Firebase, { FirebaseContext } from "./Firebase/index";

/*
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}*/


ReactDOM.render(
  //<AlertProvider template={AlertTemplate} {...options}>
  
  <BrowserRouter>
  
    <App />
  </BrowserRouter>,
   
  
  //</AlertProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
