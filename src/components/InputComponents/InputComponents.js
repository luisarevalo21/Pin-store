import React from "react";
import classes from "./InputComponent.module.css";
import Dropdown from "react-dropdown";

const inputComponent = props => {
  const inputClasses = [];

  inputClasses.push(classes.Input);

  // console.log("valid is", props.invalid);
  if (props.invalid && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  let input = null;
  switch (props.type) {
    case "input":
      inputClasses.push(classes.Input);
      input = (
        <input
          onChange={props.changed}
          placeholder="title"
          type="text"
          className={inputClasses.join(" ")}
        />
      );
      break;

    case "textarea":
      inputClasses.push(classes.TextArea);
      input = (
        <textarea
          onChange={props.changed}
          placeholder="description"
          type="text"
          className={inputClasses.join(" ")}

          // style={{ minHeight: "100px" }}
        />
      );
      break;

    case "file":
      inputClasses.push(classes.Input);
      input = (
        <input
          type="file"
          onChange={props.changed}
          className={inputClasses.join(" ")}
        />
      );
      break;

    case "price":
      inputClasses.push(classes.Input);
      input = (
        <input
          onChange={props.changed}
          placeholder="0.00"
          type="number"
          step=".01"
          className={inputClasses.join(" ")}
        />
      );
      break;

    case "dropdown":
      input = (
        <Dropdown
          options={["pins", "stickers", "phone grips", "temporary tattoos"]}
          onChange={props.changed}
          placeholder="Select an option"
          className={classes.Dropdown}
          value={props.value}
        />
      );
      break;
    case "email":
      inputClasses.push(classes.Input);

      input = (
        <>
          <h3>Email</h3>

          <input
            type="email"
            // name="email"
            placeholder="email"
            // value={email}
            onChange={props.changed}
            className={inputClasses.join(" ")}
          />
        </>
      );

      break;

    case "password":
      inputClasses.push(classes.Input);

      input = (
        <>
          <h3>Password</h3>
          <input
            type="password"
            className={inputClasses.join(" ")}
            placeholder="password"
            onChange={props.changed}
            // name="password"
            // value={email}
          />
        </>
      );
      break;

    case "repassword":
      inputClasses.push(classes.Input);

      input = (
        <>
          <h3>Confirm Password</h3>
          <input
            type="password"
            className={inputClasses.join(" ")}
            placeholder="confirm password"
            onChange={props.changed}
            // name="password"
            // value={email}
          />
        </>
      );
      break;
  }

  //   <input
  //   type="password"
  //   name="password"
  //   placeholder="Password"
  //   value={password}
  //   onChange={this.handleInputChange}
  // />

  return <>{input}</>;
};

export default inputComponent;
