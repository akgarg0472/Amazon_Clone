import React from "react";
import { useParams } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

import "./productDetail.css";

function ProductDetail() {
  const { id, title, rating, price, image } = useParams();

  const specs = [
    "Vitae dolores sapiente dicta magni! Dolor possimus molestias",
    "Lorem ipsum dolor, sit amet consectetur",
    "Adipisicing elit. Reiciendis, recusandae deleniti",
    "Mollitia fuga nemo iure odio",
    "Corporis, dignissimos reprehenderit maiores consequatur",
    "Praesentium autem laborum, rem harum",
    "Incidunt itaque nostrum, repellendus ut modi!",
    "Culpa aliquam qui corporis aperiam laudantium",
    "Officiis ullam itaque maxime aut fugit",
  ];

  return (
    <div className="product__details">
      <div className="product__details__productImage">
        <img src={decodeURIComponent(image)} alt="Product_image" />
      </div>

      <div className="product__details__info">
        <h2 className="product__details__productTitle">
          {decodeURIComponent(title).replace("%2F", "/").replace("%3A", ":")}
        </h2>
        <p className="product__details__productRatings">
          {Array(parseInt(rating))
            .fill()
            .map((val, index) => {
              return <span key={index}>⭐</span>;
            })}
        </p>

        <hr />

        <div className="product__details__productPrice">
          <CurrencyFormat
            renderText={(value) => {
              return (
                <div className="info">
                  <span className="heading">M.R.P.:</span>
                  <span className="originalPrice">{value}</span>
                </div>
              );
            }}
            decimalScale={2}
            value={parseFloat(price) + parseFloat(price / 100)}
            displayType="text"
            thousandSeparator=","
            prefix="₹"
          />
          <CurrencyFormat
            renderText={(value) => {
              return (
                <div className="info">
                  <span className="heading">Deal of the Day:</span>
                  <span className="currentPrice">{value}</span>
                </div>
              );
            }}
            decimalScale={2}
            value={price}
            displayType="text"
            thousandSeparator=","
            prefix="₹"
          />
          <CurrencyFormat
            renderText={(value) => {
              return (
                <div className="info">
                  <span className="heading">You save:</span>
                  <span className="savedAmount">{value}(10%)</span>
                </div>
              );
            }}
            decimalScale={2}
            value={price / 10}
            displayType="text"
            thousandSeparator=","
            prefix="₹"
          />

          <div className="info">
            <span className="heading">Delivery:</span>
            <span className="delivery__info">ASAP within a week</span>
          </div>

          <div className="info">
            <span className="heading">Delivered by:</span>
            <span className="delivery__info">
              Lorem ipsum (Amazon Clone certified Seller)
            </span>
          </div>

          <div className="info">
            <span className="inStockHeading">In Stock</span>
          </div>
        </div>

        <hr />

        <div className="product__details__productSpecifications">
          <div className="heading">Product Specifications</div>
          <ul className="itemSpecs">
            {specs.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
