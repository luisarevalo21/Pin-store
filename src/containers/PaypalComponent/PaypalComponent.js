import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
// import paypal from "paypal-checkout";

// const paypal = window.PAYPAL;

// console.log("PAYPAL IS", paypal);
// let ReactButton = paypal.Button.driver("react", {
//   React: window.React,
//   ReactDOM: window.ReactDOM
// });
// window.React = React;
// window.ReactDOM = ReactDOM;
// const paypal = window.PAYPAL;
// const PayPalButton = paypal.Button.driver("react", { React, ReactDOM });

// console.log("PAYPAL IS", paypal);

window.React = React;
window.ReactDOM = ReactDOM;
class PaypalComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   window.React = React;
  //   window.ReactDOM = ReactDOM;
  state = {
    showButton: false
    // env: "sandbox", // Or 'sandbox'
    // client: {
    //   sandbox:
    //     "", // sandbox client ID
    //   production: "xxxxxxxxx" // production client ID
    // },
    // commit: true // Show a 'Pay Now' button
  };
  // }

  componentDidMount() {
    // Todo
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;

    console.log(isScriptLoaded, isScriptLoadSucceed);
    if (isScriptLoaded && isScriptLoadSucceed) {
      this.setState({ showButton: true });
    }
  }
  componentWillReceiveProps(nextProps) {
    const { isScriptLoaded, isScriptLoadSucceed } = nextProps;
    const isLoadedButWasntLoadedBefore =
      !this.state.showButton && !this.props.isScriptLoaded && isScriptLoaded;
    if (isLoadedButWasntLoadedBefore) {
      if (isScriptLoadSucceed) {
        this.setState({ showButton: true });
      }
    }
  }
  render() {
    const paypal = window.PAYPAL;
    const payment = () =>
      paypal.rest.payment.create(this.props.env, this.props.client, {
        transactions: [{ amount: { total: 5, currency: this.props.currency } }]
      });
    // const paypal = window.PAYPAL;
    // const {
    //   total,
    //   currency,
    //   env,
    //   commit,
    //   client,
    //   onSuccess,
    //   onError,
    //   onCancel
    // } = this.props;
    const { showButton } = this.state;
    console.log("SHOW BUTTON IS", showButton);
    // const payment = () =>
    //   paypal.rest.payment.create(env, client, {
    //     transactions: [
    //       {
    //         amount: {
    //           total,
    //           currency
    //         }
    //       }
    //     ]
    //   });

    const onAuthorize = (data, actions) =>
      actions.payment.execute().then(() => {
        const payment = Object.assign({}, this.props.payment);
        payment.paid = true;
        payment.cancelled = false;
        payment.payerID = data.payerID;
        payment.paymentID = data.paymentID;
        payment.paymentToken = data.paymentToken;
        payment.returnUrl = data.returnUrl;
        this.props.onSuccess(payment);
      });
    // const onAuthorize = (data, actions) =>
    //   actions.payment.execute().then(() => {
    //     const payment = {
    //       paid: true,
    //       cancelled: false,
    //       payerID: data.payerID,
    //       paymentID: data.paymentID,
    //       paymentToken: data.paymentToken,
    //       returnUrl: data.returnUrl
    //     };
    //     onSuccess(payment);
    //   });
    return (
      <div>
        {showButton && (
          <paypal.Button.react
            env={this.props.env}
            client={this.props.client}
            commit
            payment={payment}
            onAuthorize={onAuthorize}
            // onCancel={onCancel}
            // onError={onError}
          />
        )}
      </div>
    );
  }
  // Todo
}
export default scriptLoader("https://www.paypalobjects.com/api/checkout.js")(
  PaypalComponent
);
