import React from "react";
import { useAlert } from "react-alert";

// ALERT COMPONENT CODE WITH HOC
const Alert = props => {
  const alert = useAlert();
  return (
    <button
      onClick={() => {
        alert.show("Oh look, an alert!");
      }}
    >
      Show Alert
    </button>
  );
};

//HOC
export default Alert;
