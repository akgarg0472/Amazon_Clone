import React from "react";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";

import "./order.css";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order #{order?.id}</h2>
      <p>{moment.unix(order?.data?.created).format("MMMM Do YYYY, h:mm A")}</p>

      {order?.data?.basket?.map((item, index) => {
        return (
          <CheckoutProduct
            key={index + 1}
            id={item.id}
            index={index}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
            showRemoveButton={false}
          />
        );
      })}

      <CurrencyFormat
        renderText={(value) => {
          return (
            <h3 className="order__total">
              <strong>Order total: </strong> {value}
            </h3>
          );
        }}
        decimalScale={2}
        value={order?.data?.amount / 100}
        displayType="text"
        thousandSeparator=","
        prefix="₹"
      />
    </div>
  );
}

export default Order;
