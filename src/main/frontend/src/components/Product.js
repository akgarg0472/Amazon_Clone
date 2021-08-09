import React from "react";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

import "./product.css";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch action into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        price: props.price,
        image: props.image,
        rating: props.rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <Link
          to={`/product/${props.id}/${encodeURIComponent(props.title)}/${
            props.rating
          }/${props.price}/${encodeURIComponent(props.image.toString())}`}
        >
          <p>{props.title}</p>
        </Link>
        <p className="product__price">
          <small>₹ </small>
          <strong>{props.price}</strong>
        </p>

        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_, index) => {
              return <p key={props.id + index}>⭐</p>;
            })}
        </div>
      </div>

      <img
        src={props.image}
        alt="product_image"
        className="product__image"
      ></img>
      <button className="product__button" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
