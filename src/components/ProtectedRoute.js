import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => {
  console.log("authentnicated is", authenticated);
  return (
    <Route
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to="/" />
      }
      {...rest}
    />
  );
};
export default ProtectedRoute;
