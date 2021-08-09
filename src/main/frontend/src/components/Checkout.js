import React, { useEffect } from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

import "./checkout.css";

function Checkout() {
  useEffect(() => {
    document.title = "Checkout";
  }, []);

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner ad"
        />

        <div>
          <h3 className="checkout__greet">
            Hi there, {user ? user.email : "visitor"}
          </h3>
          <h2 className="checkout__title">
            Your cart is {basket.length === 0 ? "empty" : ""}
          </h2>

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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
