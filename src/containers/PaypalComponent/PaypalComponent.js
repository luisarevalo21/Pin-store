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
    showButton: false,
    cart: this.props.cart,
    finalCart: null,
    subTotal: 0
    // env: "sandbox", // Or 'sandbox'
    // client: {
    //   sandbox:
    //     "", // sandbox client ID
    //   production: "xxxxxxxxx" // production client ID
    // },
    // commit: true // Show a 'Pay Now' button
  };
  // }

  getCartInformation = () => {
    let total = 0;
    const copyCart = this.props.cart.map(element => {
      total = total + Number(element.price);
      return {
        name: element.title,
        description: element.description,
        price: element.price,
        currency: "USD",
        quantity: "1"
      };
    });

    total = total.toString() + ".00";
    this.setState({ subTotal: total, finalCart: copyCart });
  };

  // return this.state.cart.map(element => console.log(element));

  componentDidMount() {
    // Todo
    const { isScriptLoaded, isScriptLoadSucceed } = this.props;
    this.getCartInformation();
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
    const { subTotal, finalCart } = this.state;
    console.log("subtotal", subTotal);
    console.log("final cart is", finalCart);
    const payment = () =>
      paypal.rest.payment.create(this.props.env, this.props.client, {
        redirect_urls: {
          return_url: "/",
          cancel_url: "/"
        },

        transactions: [
          {
            amount: {
              total: subTotal,
              currency: "USD",
              details: {
                subtotal: subTotal,
                tax: "0",
                shipping: "0",
                handling_fee: "0",
                shipping_discount: "0",
                insurance: "0"
              }
            },
            description: "The payment transaction description.",
            custom: "90048630024435",
            //invoice_number: '12345', Insert a unique invoice number
            payment_options: {
              allowed_payment_method: "INSTANT_FUNDING_SOURCE"
            },
            soft_descriptor: "ECHI5786786",
            item_list: {
              items: finalCart
              // {
              //   name: "hat",
              //   description: "Brown hat.",
              //   quantity: "1",
              //   price: subTotal,
              //   // tax: "0.01",
              //   // sku: "1",
              //   currency: "USD"
              // }
              // {
              //   name: "handbag",
              //   description: "Black handbag.",
              //   quantity: "1",
              //   price: "15",
              //   tax: "0.02",
              //   sku: "product34",
              //   currency: "USD"
              // }
              //]
              // shipping_address: {
              //   recipient_name: "Brian Robinson",
              //   line1: "4th Floor",
              //   line2: "Unit #34",
              //   city: "San Jose",
              //   country_code: "US",
              //   postal_code: "95131",
              //   phone: "011862212345678",
              //   state: "CA"
              // }
            }
          }
        ],
        note_to_payer: "Contact us for any questions on your order."
      });

    //   transactions: [
    //     {
    //       amount: {
    //         total: "5",
    //         currency: "USD",
    //         details: {
    //           subtotal: "5",
    //           tax: "0",
    //           shipping: "0",
    //           handling_fee: "0",
    //           shipping_discount: "0",
    //           insurance: "0"
    //         }
    //       },
    //       description: "The payment transaction description.",
    //       custom: "90048630024435",
    //       //invoice_number: '12345', Insert a unique invoice number
    //       payment_options: {
    //         allowed_payment_method: "INSTANT_FUNDING_SOURCE"
    //       },
    //       soft_descriptor: "ECHI5786786",
    //       item_list: {
    //         items:
    //           // items: [
    //           {
    //             name: "hat",
    //             description: "Brown hat.",
    //             quantity: "5",
    //             price: "5",
    //             tax: "0.01",
    //             sku: "1",
    //             currency: "USD"
    //           },
    //         //   {
    //         //     name: "handbag",
    //         //     description: "Black handbag.",
    //         //     quantity: "1",
    //         //     price: "15",
    //         //     tax: "0.02",
    //         //     sku: "product34",
    //         //     currency: "USD"
    //         //   }

    //         shipping_address: {
    //           recipient_name: "Brian Robinson",
    //           line1: "4th Floor",
    //           line2: "Unit #34",
    //           city: "San Jose",
    //           country_code: "US",
    //           postal_code: "95131",
    //           phone: "011862212345678",
    //           state: "CA"
    //         }
    //       }
    //     }
    //   ],
    //   note_to_payer: "Contact us for any questions on your order."
    // });

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
    // this.getCartInformation();
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

    const onAuthorize = (data, actions) => {
      actions.payment.execute().then(() => {
        const payment = Object.assign({}, this.props.payment);
        payment.paid = true;
        payment.cancelled = false;
        payment.payerID = data.payerID;
        payment.paymentID = data.paymentID;
        payment.paymentToken = data.paymentToken;
        payment.returnUrl = data.returnUrl;
        // this.props.onSuccess(payment);
      });
      // console.log(

      actions.order.get().then(
        orderDetails => console.log("the order details are,", orderDetails)
        //)
      );
    };
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
