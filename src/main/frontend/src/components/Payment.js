import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import { getBasketTotal } from "../reducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { db } from "../firebase";
import swal from "sweetalert";
import "./payment.css";

function Payment() {
  useEffect(() => (document.title = "Payment"), []);
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    // generate stribe secret that allow us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripe expects the total in a currency's subunits (for INR its paisa)
        url: `/payments/create/${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(null);
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (clientSecret !== null) {
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          // paymentIntent = payment confirmation
          db.collection("users")
            .doc(user.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

          setSucceeded(true);
          setError(null);
          setProcessing(false);
          dispatch({
            type: "EMPTY_BASKET",
          });
          history.replace("/orders");
        });
    } else {
      swal(
        "Error",
        "Error processing payment. Please try again later.",
        "error"
      ).then(() => {
        history.replace("/");
      });
    }
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
    e.error ? setDisabled(true) : setDisabled(false);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* payment address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : "sampleEmail123@email.xyz"}</p>
            <p>Lorem, ipsum dolor.</p>
            <p>Lorem, ipsum. Lorem</p>
          </div>
        </div>

        {/* review items before payment */}
        <div className="payment__section payment__section__review">
          <div className="payment__title">
            <h3>Review items & delivery</h3>
          </div>
          <div className="payment__items">
            {basket?.length === 0 ? <p>Your shopping basket is empty!!</p> : ""}
            {basket?.map((item, index) => {
              return (
                <CheckoutProduct
                  key={index + 1}
                  id={item.id}
                  index={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  showRemoveButton={true}
                />
              );
            })}
          </div>
        </div>

        {/* make payment with card details */}
        <div className="payment__section payment__section__details">
          <div className="payment__title">
            <h3>Payment Details</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator=","
                  prefix={"₹"}
                ></CurrencyFormat>

                <button
                  disabled={processing || disabled || succeeded}
                  style={{
                    backgroundColor:
                      processing || disabled || succeeded
                        ? "lightgray"
                        : "#f0c14b",
                  }}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
