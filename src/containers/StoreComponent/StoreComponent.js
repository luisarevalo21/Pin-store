import React, { Component } from "react";
import classes from "./StoreComponent.module.css";
import image from "../../assets/images/HomeImages/PhoneGrips.jpg";
import Alert from "../../components/Alert/Alert";
import soraImage from "../../assets/images/StoreImages/soraSticker.jpg";
import SideMenu from "../../components/SideMenu/SideMenu";
import CardComponent from "../../components/CardComponent/CardComponent";
import axios from "../../axios";
// import Firebase from "firebase";
import firebase from "../../firebase";
import ShopingCartComponent from "../../components/ShoppingCartComponent/ShoppingCartComponent";
// import { withFirebase } from "../../Firebase/index";
// import { FirebaseContext } from "../../Firebase/index";

// import firebaseConfig from "../../firebase";
// import config from "../../config";
// import { Link, Redirect } from "react-router-dom";

// console.log(config.firebase);

// firebase.initializeApp(config.firebase);
// const storage = firebase.storage().ref();

// const storageRef = firebase.storage.ref("folderName/file.jpg");

// const store = () => (
//   <div>
//     <h1>SignUp</h1>

//     <StoreComponent />

//     <FirebaseContext.Consumer>
//       {firebase => <StoreComponent firebase={firebase} />}
//     </FirebaseContext.Consumer>
//   </div>
// );

// const storage = firebase.storage().ref();

class StoreComponent extends Component {
  state = {
    products: null,
    pins: null,
    stickers: null,
    phoneGrips: null,
    links: null,
    location: null,
    currentPath: null,
    cart: null
  };

  componentDidUpdate() {
    // console.log("will update was called");
    // console.log("stae.location is", this.state.location);
    // console.log("props.location", this.props.location.pathname);

    if (this.state.currentPath !== this.props.location.pathname) {
      this.fetchingData();
    }
    // this.fetchingData();
  }

  componentDidMount() {
    // console.log(this.props.location.pathname);

    this.fetchingData();

    // console.log(this.props.firebase);
    // axios
    //   .get("/products.json")
    //   .then(response => {
    //     // const links =
    //     //   // ...Object.keys(response.data.pins),
    //     //   Object.keys(response.data.stickers);
    //     // links.map(element => {
    //     //   console.log(typeof element);
    //     //   storage
    //     //     .child(`${element}.jpg`)
    //     //     .getDownloadURL()
    //     //     .then(url => console.log(url));
    //     this.setState({ products: response.data });
    //     //   .catch(error => console.log(error));
    //   })
    //   .catch(error => console.log(error));

    // storage
    //   .child("/images")
    //   .getDownloadURL()
    //   .then(url => console.log("the url is", url))
    //   .catch(error => console.log(error));
    // storage.child("/images").getDownLoadLink(response => console.log(response));
    // storage.ref().then(snapshot => console.log(snapshot.val()));
    // storage.then(snapshot => console.log(snapshot.val()));
  }

  fetchingData = () => {
    // console.log("the locaiton is fetching is", this.props.location.pathname);

    switch (this.props.location.pathname) {
      case "/store":
        axios
          .get("/pins.json")
          .then(response => {
            // console.log(response.data);
            this.setState({
              pins: response.data,
              location: "store",
              currentPath: "/store"
            });
          })
          .catch(error => console.log(error));
        axios
          .get("/stickers.json")
          .then(response => {
            // console.log(response.data);

            this.setState({ stickers: response.data });
          })
          .catch(error => console.log("Error:", error));

        break;

      case "/store/pins":
        axios
          .get("/pins.json")
          .then(response => {
            // console.log(response.data);

            this.setState({
              pins: response.data,
              location: "pins",
              currentPath: "/store/pins"
            });
          })
          .catch(error => console.log(error));
        break;
      case "/store/stickers":
        axios
          .get("/stickers.json")
          .then(response => {
            // console.log(response.data);

            this.setState({
              stickers: response.data,
              location: "stickers",
              currentPath: "/store/stickers"
            });
          })
          .catch(error => console.log(error));
        break;
    }
  };
  handleClick = (title, type) => {
    // console.log("the type is", title);
    this.props.history.push(`${this.props.match.url}/${type}/${title}`);
    // console.log(this.props.location);

    // return <Link to="/store/item" />;
  };

  AddItem = item => {
    console.log("added item was clicked", item);
  };
  // componentDidUpdate(){

  // }

  // fetchImages = () => {
  //   console.log(this.state.products);

  //   const links = [
  //     // ...Object.keys(this.state.products.pins),
  //     ...Object.keys(this.state.products.stickers)
  //   ];
  //   console.log(links);

  //   // array.forEach(element => {});

  //   let urls = [];
  //   for (let i = 0; i < links.length; i++) {
  //     // console.log(links[i]);
  //     urls.push(
  //       storage
  //         .child(`${links[i]}.jpg`)
  //         .getDownloadURL()
  //         .then(url => url)
  //         .catch(error => console.log(error))
  //     );
  //   }

  // storage
  //     .child(`${links[i]}`)
  //     .getDownloadURL()
  //     .then(url => url)
  //     .catch(error => console.log(error));
  // }
  // const urls = links.map(element => {
  //   return storage
  //     .child(`${element}.jpg`)
  //     .getDownloadURL()
  //     .then(url => this.storeUrl(element, url))
  //     .catch(error => console.log(error));
  // });
  //   return urls;
  //   // console.log(urls);
  // };

  // storeUrl = (title, url) => {
  //   return { [title]: url };
  // };

  render() {
    // console.log("the links are", this.state.links);
    // console.log("FIREBASE IS", firebase);
    // console.log(this.state.products);

    const { stickers, pins } = this.state;
    let items = null;
    let keys = [];
    // let pins, stickers;
    switch (this.state.location) {
      case "store":
        // let { pins, stickers } = this.state;
        const combined = { ...pins, ...stickers };
        keys = Object.keys(combined);

        // console.log("the keys are", keys);
        items = keys.map(element => {
          // console.log("the element is", element);
          return (
            <CardComponent
              clicked={() =>
                this.handleClick(
                  combined[element].title,
                  combined[element].type
                )
              }
              key={element}
              title={combined[element].title}
              image={combined[element].url}
              // image={link}
              // image={urls.map(title => element[title])}
              // image={storage
              //   .child(`${title}.jpg`)
              //   .getDownloadURL()
              //   .then(url => this.setState({ selectedImage: url }))
              //   .catch(error => console.log(error))}
              price={combined[element].price}
              // type={combined[element].type}
            />
          );
        });
        break;

      case "pins":
        // const { pins } = this.state;
        keys = Object.keys(pins);
        items = keys.map(element => {
          return (
            <CardComponent
              clicked={() =>
                this.handleClick(pins[element].title, pins[element].type)
              }
              key={element}
              title={pins[element].title}
              image={pins[element].url}
              // image={link}
              // image={urls.map(title => element[title])}
              // image={storage
              //   .child(`${title}.jpg`)
              //   .getDownloadURL()
              //   .then(url => this.setState({ selectedImage: url }))
              //   .catch(error => console.log(error))}
              price={pins[element].price}
              // type={combined[element].type}
            />
          );
        });
        break;

      case "stickers":
        // const { stickers } = this.state;
        keys = Object.keys(stickers);
        items = keys.map(element => {
          return (
            <CardComponent
              clicked={() =>
                this.handleClick(
                  stickers[element].title,
                  stickers[element].type
                )
              }
              key={element}
              title={stickers[element].title}
              image={stickers[element].url}
              // image={link}
              // image={urls.map(title => element[title])}
              // image={storage
              //   .child(`${title}.jpg`)
              //   .getDownloadURL()
              //   .then(url => this.setState({ selectedImage: url }))
              //   .catch(error => console.log(error))}
              price={stickers[element].price}
              // type={combined[element].type}
            />
          );
        });
        break;

      default:
        items = <div>No items to dispaly </div>;
    }

    return (
      <>
        <section className={classes.Image}>
          {/* <img src={image} /> */}
          <p>store image will go here</p>
        </section>

        <div className={classes.Container}>
          <SideMenu />

          <div className={classes.Gallery}>
            {items}

            {/* //ALERT COMPONENT  */}
            <Alert />
            {/* <ShopingCartComponent cart={this.state.cart} /> */}
            {/* <CardComponent title="Sora sticker" image={soraImage} price={2.0} /> */}
            {/* <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />

              <CardComponent /> */}
          </div>

          {/* <aside className={classes.Aside}>
          <a>Phone grips</a>
          <a>Stickers</a>
          <a>Pins</a>
          <a>Temporary Tattoos</a>
        </aside> */}
        </div>
      </>
    );
  }
}

export default StoreComponent;

// console.log("this.props.location", this.props);
// console.log(this.props);
// console.log(this.state.products.length);

// if (
//   // this.state.products !== null
//   this.state.location
// ) {
// console.log("inside the if");

// const urls = this.fetchImages();

// urls.map(element => console.log(element.B));
// console.log(urls);
// console.log("inside if");
// const { pins, stickers, links } = this.state;

// console.log(links);

// const combined = { ...pins, ...stickers };

// console.log(
//   storage.refFromURL(
//     "gs://twin-bear-creations.appspot.com/KH Kairi Chibi Sticker.jpg"
//   )
// );
// console.log("combined is ", combined);
// console.log(this.state.pins);
// const keys = Object.keys(combined);

// console.log("the keys are", keys);
// // console.log(this.state.pins);
// items = keys.map(element => {
// const link = storage.refFromURL(combined[element].url).toString();

// storage
//   .getDownloadURL("KH Kairi Chibi Sticker.jpg")
//   .then(url => console.log(url))
//   .catch(error => console.log(error));

// console.log("linek is", link);
// <Link to="/store/item">
// return (
//   <CardComponent
//     clicked={() =>
//       this.handleClick(combined[element].title, combined[element].type)
//     }
//     key={Math.random()}
//     title={combined[element].title}
//     image={combined[element].url}
//     // image={link}
//     // image={urls.map(title => element[title])}
//     // image={storage
//     //   .child(`${title}.jpg`)
//     //   .getDownloadURL()
//     //   .then(url => this.setState({ selectedImage: url }))
//     //   .catch(error => console.log(error))}
//     price={combined[element].price}
//     // type={combined[element].type}
//   />
// );

// </Link>
// });

// console.log(values);
// values.map(element => console.log(element.price));
// console.log(values);
// keys.map(element => {
//   console.log(element);
//   // console.log(values[element]);
//   // console.log(pins[element]);
// });
// console.log(keys);

// keys.map(element => {
//   console.log(pins[element]);
// });
// axios.get("./pins.json").then(response => console.log(response.data));
// console.log(keys);
// console.log(keys);
// keys.map(element => {
//   // axios.get("./pins")
//   // console.log(element);
//   axios.get(`./${element}.json`).then(response => {
//     console.log(element);

//     console.log(Object.keys(response.data));
//   });
// });

//   )

// Object.keys(this.state.products).map(element => console.log(element));

// console.log(this.state.products.keys());
//}
