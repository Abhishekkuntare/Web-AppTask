import React, { Fragment } from "react";
import "./Navbar.css";
import Burger from "../../images/Burger.png";
import Cart from "../../images/Cart.png";

const Navbar = () => {
  return (
    <Fragment>
      <div className="Navbar">
        <img src={Burger} alt="Burger" />
        <img src={Cart} alt="Cart" />
      </div>
      <div className="Navbar_line" />
    </Fragment>
  );
};

export default Navbar;
