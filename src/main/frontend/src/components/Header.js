import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import swal from "sweetalert";
import ReactCountryFlag from "react-country-flag";
import { auth } from "../firebase";

import "./header.css";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      swal({
        title: "Confirm logout ?",
        text: "",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willLogout) => {
        if (willLogout) {
          auth.signOut();
          swal("Successfully logged out", "", "success");
        }
      });
    }
  };

  const searchOperation = () => {
    swal(
      `Search query is: ${document.getElementById("header__searchInput").value}`
    );
  };

  return (
    <div className="header">
      <div className="header__left__section">
        <Link to="/">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="header__logo"
          />
        </Link>
      </div>

      <div className="header__search">
        <input
          type="search"
          className="header__searchInput"
          id="header__searchInput"
          placeholder="Search product"
        />
        <SearchIcon className="header__searchIcon" onClick={searchOperation} />
      </div>

      <div
        className="header__option country__flag"
        onClick={() => swal("❤️", "Proud Indian", "success")}
      >
        <span className="header__optionLineOne">
          <ReactCountryFlag
            countryCode="IN"
            svg
            style={{
              width: "1.5rem",
              height: "1.5rem",
            }}
            title="India"
          />
        </span>
      </div>

      <div className="header__right__section">
        <div className="header__nav">
          <Link to={!user ? "/login" : "/"} className="header__loginLink">
            <div className="header__option" onClick={handleAuthentication}>
              <span className="header__optionLineOne">
                {user ? user.bc.email : "Hello, Sign in"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Sign in"}
              </span>
            </div>
          </Link>

          <Link to="/orders" style={{ textDecoration: "none" }}>
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header__optionBasket">
            <Link to="/checkout" className="header__checkoutBasketLink">
              <ShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
              <span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
