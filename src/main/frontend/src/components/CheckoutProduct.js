import React from "react";
import { useStateValue } from "../StateProvider";
import "./checkoutProduct.css";

// props =  { id, image, title, price, rating }
function CheckoutProduct(props) {
  const [state, dispatch] = useStateValue();

  const removeProductFrombasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.index,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        src={props.image}
        className="checkoutProduct__image"
        alt="ProductImage"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <div className="checkoutProduct__price">
          <small>₹ </small>
          <strong>{props.price}</strong>
        </div>
        <span className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_, index) => {
              return <p key={index}>⭐</p>;
            })}
        </span>

        <button
          onClick={removeProductFrombasket}
          style={{
            display: props.showRemoveButton ? "flex" : "none",
          }}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
