import React from "react";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import swal from "sweetalert";

import "./subtotal.css";

function Subtotal() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ( {state?.basket?.length} items ) :{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state?.basket)}
        displayType={"text"}
        thousandSeparator=","
        prefix={"₹"}
      ></CurrencyFormat>

      <button
        onClick={() => {
          if (state.user) {
            if (parseInt(getBasketTotal(state?.basket)) > 0) {
              history.push("/payment");
            } else {
              swal("Warning", "Please add items to checkout", "info");
            }
          } else {
            swal("Error", "Please login to checkout", "error");
          }
        }}
      >
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
