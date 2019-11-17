import React, { Component } from "react";
import classes from "./DashBoardComponent.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "../../axios";
import firebase from "../../firebase";
import InputComponent from "../../components/InputComponents/InputComponents";
class DashBoardComponent extends Component {
  state = {
    submissionForm: {
      title: {
        value: "",
        validation: {
          required: true,
          minLength: 5
        },
        type: "input",
        valid: false,
        touched: false
      },

      price: {
        value: "",
        validation: {
          required: true,
          minValue: 0
        },
        type: "price",
        valid: false,
        touched: false
      },
      description: {
        value: "",
        validation: {
          required: true
        },
        type: "textarea",
        valid: false,
        touched: false
      },

      dropdown: {
        value: "",
        validation: {
          required: true
        },
        type: "dropdown",
        valid: false,
        touched: false
      },

      file: {
        value: "",
        validation: {
          type: "image/jpeg"
        },
        valid: false,
        touched: false,
        type: "file"
      }
    },
    url: null,
    formIsValid: false,
    item: ""
    // errors: {
    //   title: "",
    //   description: "",
    //   price: "",
    //   file: ""
    // }
    // image: {
    //   value: "",
    //   validation: {
    //     required: true,

    //   },
    //   valid: false
    // },
  };

  checkValdity(value, rules) {
    console.log("the vlaue is", value);
    console.log(rules);
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length > rules.minLength && isValid;
    }

    if (rules.type) {
      isValid = value.type === rules.type && isValid;
    }
    if (rules.minValue) {
      isValid = value > rules.minValue && isValid;
    }

    return isValid;
  }
  handleChange = (event, name) => {
    // const { value } = event.target;
    console.log("the nameis", name);
    const submissionFormCopy = { ...this.state.submissionForm };

    const submissionFormElement = { ...submissionFormCopy[name] };

    // console.log(event.target.value[0]);
    if (name === "file") {
      submissionFormElement.value = event.target.files[0];
    } else if (name === "dropdown") {
      submissionFormElement.value = event.value;
    } else {
      submissionFormElement.value = event.target.value;
    }
    submissionFormElement.touched = true;

    submissionFormElement.valid = this.checkValdity(
      submissionFormElement.value,
      submissionFormElement.validation
    );

    // console.log("the value is", value);

    submissionFormCopy[name] = submissionFormElement;

    let formIsValid = true;

    for (let element in submissionFormCopy) {
      formIsValid = submissionFormCopy[element].valid && formIsValid;
    }
    // const { errors } = this.state;
    // switch (name) {
    //   case "title":
    //     errors.title =
    //       value.length < 5 ? "title must be longer than 5 characters" : null;
    //     break;

    //   case "description":
    //     errors.description =
    //       value.length < 5
    //         ? "Description must be longer than 5 characters"
    //         : null;
    //     break;

    //   case "price":
    //     errors.price = value < 0 ? "Price must be greater than 0" : null;
    //     break;
    // }

    console.log("event is", event);
    this.setState({
      submissionForm: submissionFormCopy,
      formIsValid: formIsValid
    });
  };
  // handleFileChange = event => {
  //   const submissionFormCopy = { ...this.state.submissionForm };
  //   const submissionFormElement = { ...submissionFormCopy["file"] };

  //   const { files } = event.target;
  //   // const { errors } = this.state;

  //   // console.log(files[0].type);
  //   // if (files[0].type !== "image/jpeg") {
  //   //   errors.file = "Add a photo with jpeg extension";
  //   // }

  //   // console.log(event.target.files[0]);
  //   this.setState({ errors, file: files[0] });
  // };

  // handleItemChange = (event, name) => {
  //   // const submissionFormElement = { ...submissionFormCopy[name] };

  //   // submissionFormElement.

  //   console.log("event is", event);
  //   this.setState({ [name]: event.value });
  // };

  handleSubmit = () => {
    // const { item } = this.state;
    const formData = {};
    for (let formIdenifier in this.state.submissionForm) {
      formData[formIdenifier] = this.state.submissionForm[formIdenifier].value;
    }

    const folderName = formData.dropdown;

    formData.price = Number(formData.price).toFixed(2);

    // console.log("formdata value is ", formData["price"].value);

    // if (title !== "" && description !== "" && price > 0 && url !== null) {
    const storage = firebase.storage();
    // let fetchedUrl;
    //can change to folder name depending on item selected /pins etc
    const uploadTask = storage
      .ref(`/images/${folderName}/${formData.file.name}`)
      .put(formData.file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },

      () => {
        storage
          .ref(`/images/${folderName}`)
          .child(formData.file.name)
          .getDownloadURL()
          .then(url => {
            // console.log("the url is", url);
            this.setState({ url });
          })
          .then(() => {
            formData.url = this.state.url;

            // console.log("data before push", formData.dropdown);
            axios
              .post(`/${formData.dropdown}.json`, formData)
              .then(response => {
                console.log(response);
              })
              .catch(error => console.log(error));
          })
          .catch(error => console.log(error));
      }
    );
  };

  // }
  // console.log("this.state", this.state.errors);
  // console.log("enter values");
  // console.log("fetched url is", this.state.url);
  // const data = {
  //   title: this.state.title,
  //   description: this.state.title,
  //   price: this.state.price,
  //   type: this.state.item,
  //   id: this.state.title,
  //   url: fetchedUrl
  // };
  // axios
  //   .patch(`/${this.state.item}.json`, { [this.state.title]: data })
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => console.log(error));
  // .then(response => console.log(response))
  // .catch(error => console.log(error));
  // uploadTask.on();
  // upLoadTask.on("state changed", snapshot => {
  //   console.log("snapshot is", snapshot);
  // });
  // const database = firebase.database();

  // validateForm = errors => {
  //   let valid = true;

  //   console.log("the erors are ", errors);

  //   Object.values(errors).forEach(val => val.length > 0 && (val = false));
  //   return valid;
  // };
  // const storageRef = firebase.storage().ref();

  // // const fd = new FormData();
  // // fd.append("image", this.state.file, this.state.file.name);
  // storageRef
  //   .child(this.state.file.name)
  //   .put(this.state.file)
  //   .then(response => console.log(response))
  //   .catch(error => console.log(error));
  // const data = {
  //   title: this.state.title,
  //   description: this.state.title,
  //   price: this.state.price,
  //   type: this.state.item,
  //   id: this.state.title,
  //   url: this.state.url
  // };
  // if (this.state.title !== "") {
  //   // const { title } = this.state.title;
  //   axios
  //     .patch(`/${this.state.item}.json`, { [this.state.title]: data })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => console.log(error));

  render() {
    const { submissionForm } = this.state;

    const formElementArray = [];

    for (let key in this.state.submissionForm) {
      formElementArray.push({
        id: key,
        config: this.state.submissionForm[key]
      });
    }

    let form = formElementArray.map(element => {
      return (
        <InputComponent
          key={element.id}
          type={element.config.type}
          changed={e => this.handleChange(e, element.id)}
          invalid={!element.config.valid}
          touched={element.config.touched}
          value={element.config.value}
        />
      );
    });
    return (
      <div className={classes.Layout}>
        <h2>Welcome to your dashboard</h2>
        <div className={classes.Submission} onSubmit={this.handleSubmit}>
          <h4>Submit new entry </h4>
          {form}
          <button
            onClick={this.handleSubmit}
            disabled={!this.state.formIsValid}
            className={classes.Button}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default DashBoardComponent;

{
  /* <input
            onChange={e => this.handleChange(e, "title")}
            placeholder="Title"
            type="text"
            className={inputClasses}
          /> */
}
{
  /* <InputComponent
            type="input"
            changed={e => this.handleChange(e, "title")}
            invalid={!this.state.submissionForm.title.valid}
            touched={this.state.submissionForm.title.touched}
          /> */
}

{
  /* <input
            onChange={e => this.handleChange(e, "price")}
            placeholder="Price"
            type="number"
          /> */
}

{
  /* <Dropdown
            value={this.state.item}
            onChange={e => this.handleItemChange(e, "item")}
            placeholder="Select an option"
            className={classes.Dropdown}
          /> */
}

{
  /* <textarea
            onChange={e => this.handleChange(e, "description")}
            placeholder="description"
            type="text"
            className={classes.TextArea}

            // style={{ minHeight: "100px" }}
          /> */
}

{
  /* <InputComponent
            type="textarea"
            changed={e => this.handleChange(e, "description")}
            invalid={!this.state.submissionForm.description.valid}
            touched={this.state.submissionForm.description.touched}
          /> */
}

{
  /* <input
            id="input"
            type="file"
            onChange={e => this.handleChange(e, "file")}
          /> */
}
