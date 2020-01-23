import React, { Component, cloneElement } from "react";
import { render } from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";
import { useAlert } from "react-alert";
import classes from "./DashBoardComponent.module.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "../../axios";
import firebase from "../../firebase";
import PopupComponent from "../../components/PopUpComponent/PopUpComponent";
import Spinner from "react-bootstrap/Spinner";
// import $ from "jquery";

import InputComponent from "../../components/InputComponents/InputComponents";

const intialState = {
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

    category: {
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
      type: "file",
      lastPdfAddTime: ""
    }
  },

  url: null,
  selectedFile: null,
  formIsValid: false,
  item: "",
  posting: false,
  progress: 0
};
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

      category: {
        value: "",
        validation: {
          required: true
        },
        type: "dropdown",
        valid: false,
        touched: false
      }

      // file: {
      //   value: "",
      //   validation: {
      //     type: "image/jpeg"
      //   },
      //   name: "",
      //   valid: false,
      //   touched: false,
      //   type: "file",
      //   lastPdfAddTime: ""
      // }
    },
    url: null,
    formIsValid: false,
    selectedFile: null,
    item: "",
    posting: false,
    progress: 0,
    ref: 12

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

  handleFileUpload = event => {
    const copy = { ...this.state };

    copy.selectedFile = event.target.files[0];

    this.setState(copy);
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
      if (value !== undefined) isValid = value.type === rules.type && isValid;
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

    console.log("THE EVENT IS", event.timeStamp);
    // console.log(event.target.value[0]);
    if (name === "file") {
      // submissionFormElement.fileInput = event.target.files[0];
      // submissionFormElement.lastPdfAddTime = event.timeStamp;
      // submissionFormElement.name = event.target.files[0].name;
    } else if (name === "category") {
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

    console.log("the submission element is", submissionFormCopy);

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

  clearState = event => {
    console.log("clear the state");
    this.setState(intialState);
  };
  handleCompletion = () => {
    console.log("button was pressed");
    this.props.history.push("/");
  };

  handleNewSubmission = event => {
    this.setState({ posting: false });
    this.clearState();
  };

  // handleToggle = () => {
  //   this.handleNewSubmission();
  // };

  handleSubmit = e => {
    const { selectedFile } = this.state;

    // const { item } = this.state;
    const formData = {};
    for (let formIdenifier in this.state.submissionForm) {
      formData[formIdenifier] = this.state.submissionForm[formIdenifier].value;
    }

    const folderName = formData.category;

    formData.price = Number(formData.price).toFixed(2);

    // // console.log( value is ", formData["price"].value);

    // if (title !== "" && description !== "" && price > 0 && url !== null) {

    const storage = firebase.storage();
    // let fetchedUrl;
    //can change to folder name depending on item selected /pins etc
    const uploadTask = storage
      .ref(`/images/${folderName}/${selectedFile.name}`)
      .put(selectedFile);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress, posting: true });
      },
      error => {
        // Error function ...
        console.log(error);
      },

      () => {
        storage
          .ref(`/images/${folderName}`)
          .child(selectedFile.name)
          .getDownloadURL()
          .then(url => {
            // console.log("the url is", url);
            this.setState({ url });
          })
          .then(() => {
            // const data = {
            //   title: this.state.title,
            //   description: this.state.title,
            //   price: this.state.price,
            //   type: this.state.item,
            //   url: this.state.url
            // };

            formData.url = this.state.url;

            const data = {
              available: "true",
              category: formData.category
            };

            axios
              .post(`/products/${formData.category}.json`, data)
              .then(
                response => {
                  formData.id = response.data.name;
                  axios

                    .put(
                      `/${formData.category}/${response.data.name}.json`,
                      formData
                    )
                    .then(response => {
                      console.log(response);
                    })
                    .catch(error => console.log(error));
                }
                // formData.id = response.data.name
                // axios

                //   .put(
                //     `/${formData.dropdown}/${response.data.name}.json`,
                //     formData
                //   )
                //   .then(response => {
                //     console.log(response);
                //   })

                // .catch(error => console.log(error))
              )
              .catch(error => console.log(error));
          });
      }
    );

    // console.log("THE FORM DATA IS", formData);
    // axios
    //   .post(`/products/${formData.dropdown}.json`, "true")
    //   .then(response =>
    //     axios

    //       .put(`/${formData.dropdown}/${response.data.name}.json`, formData)
    //       .then(response => {
    //         console.log(response);
    //       })
    //       .catch(error => console.log(error))
    //   )
    //   .catch(error => console.log(error));
  };

  // console.log("data before push", formData.dropdown);

  // console.log("THE ID IS ", formData);
  // axios

  //   .put(`/${formData.dropdown}/${formData.id}.json`, formData)
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => console.log(error));

  // axios
  //   .post(`/${formData.dropdown}.json`, formData)
  //   .then(response => {
  //     // this.setState({completed:true})
  //     // const options = {
  //     //   // you can also just use 'bottom center'
  //     //   position: positions.BOTTOM_CENTER,
  //     //   timeout: 5000,
  //     //   offset: "30px",
  //     //   // you can also just use 'scale'
  //     //   transition: transitions.SCALE
  //     // };
  //     // alert("File succesfully uploaded");
  //     /* rerote to main after succesfull submitting*/
  //     // this.props.history.push("/");
  //     // console.log(response);
  //   })
  //   .catch(error => console.log(error));
  //     })
  //     .catch(error => console.log(error));
  // }
  //);

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
    let loadModual = null;

    console.log("the state is ", this.state);
    if (this.state.posting) {
      loadModual = (
        <PopupComponent
          posting={this.state.posting}
          progress={this.state.progress}
          completed={this.handleCompletion}
          reset={this.handleNewSubmission}
          handleToggle={this.handleNewSubmission}
        />
      );
    }
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
          myKey={element.config.lastPdfAddTime}
        />
      );
    });
    return (
      <div className={classes.Layout}>
        <h2>Welcome to your dashboard</h2>
        <div className={classes.Submission} onSubmit={this.handleSubmit}>
          <h4>Submit new entry </h4>
          {form}

          <input
            type="file"
            className={classes.Input}
            onChange={this.handleFileUpload}
            accept="image/jpg"
          />

          {/* <button onClick={this.clearState}>clear</button> */}
          <button
            onClick={this.handleSubmit}
            disabled={!this.state.formIsValid}
            className={classes.Button}
          >
            Submit
          </button>

          {/* <input type="file" onChange={e => this.UPLoadFile(e)} />
          <input type="file" id="files" className="hidden" />
          <label for="files">Select profile picture</label> */}
          {/* <input id="input" type="file" onChange={this.handleFileChange} /> */}
          {/* <button
            onClick={this.handleSubmit}
            className="btn btn-success btn-ladda-progress"
            datastyle="expand-right"
          >
            Submit {this.state.progress}
          </button> */}
          {/* <Alert /> */}

          {loadModual}
          {/* <PopupComponent clicked={this.state.posting} /> */}
          {/* <progress
            className="uploadProgress"
            value={this.state.progress}
            max="1.0"
          /> */}
        </div>
      </div>
    );
  }
}

export default DashBoardComponent;
