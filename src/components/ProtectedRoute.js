import React from "react";
import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({
  component: Component,
  authenticated,
  isAdmin,
  ...rest
}) => {
  console.log("authentnicated is", authenticated);
  return (
    <Route
      render={props =>
        authenticated && isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
      {...rest}
    />
  );
};
export default ProtectedRoute;
