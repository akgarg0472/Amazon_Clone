import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import { Redirect } from "react-router-dom";

import "./orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    if (state.user !== null) {
      db.collection("users")
        .doc(state.user.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, []);

  if (state.user) {
    return (
      <div className="orders">
        <h1>Your orders</h1>

        <div className="orders__order">
          {orders?.map((order, index) => {
            return <Order key={index} order={order} />;
          })}
        </div>
      </div>
    );
  } else {
    return <Redirect to="/login" />;
  }
}

export default Orders;
