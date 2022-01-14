import React, { Fragment } from "react";
import "../Main/Main.css";
import "../Main/Fonts.css";
import "../Main/MediaQuery.css";
import Vector from "../../images/Vector.png";
import bottle1 from "../../images/bottle1.png";
import bottle2 from "../../images/bottle2.png";
import bottle3 from "../../images/bottle3.png";
import star from "../../images/stars.png";
import icon from "../../images/icon.png";
import number from "../../images/₹1299.png";
import number1 from "../../images/₹795.png";
import number2 from "../../images/₹999.png";
import Cart from "../../images/Cart.png";

const Main = () => {
  return (
    <Fragment>
      <div className="Main">
        {/* Main Left */}
        <div className="Main_left">
          {/* left all */}
          <div className="Main_left_img_all">
            <img className="Main_left_img_vector" src={Vector} alt="Vector" />
            <img className="Main_left_img_1" src={bottle1} alt="bottle1" />
            <div className="main_div"></div>
            <img className="Main_left_img_2" src={bottle2} alt="bottle2" />
            <img className="Main_left_img_3" src={bottle3} alt="bottle3" />
          </div>
        </div>
        {/* Main Right */}
        <div className="Main_right">
          <div className="main_right_head">
            <h1>Everyday rinse and reload</h1>
            <p>
              Achieve your dream skin goal with this complete package of
              skincare produts that will rejuvenate your day.
            </p>
          </div>
          <div className="main_right_elements">
            <div className="main_right_stars">
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
              <img src={star} alt="Star" />
            </div>
            <p>4.5</p>
            <h6>Click to read reviews</h6>
            <img src={icon} alt="icon" />
          </div>
          <div className="main_right_price">
            <h1>₹899</h1>
            <img src={number} alt="price" />
          </div>
          {/* Box 1 */}
          <div className="main_right_box1">
            <div className="main_right_box1_tag">
              <img src={star} alt="Star" />
              <p>MOST POPULAR</p>
              <img src={star} alt="Star" />
            </div>
            <h1>1 Months Pack (4 tubes)</h1>
            <div className="main_right_box1_row1">
              <p>Savings: ₹200</p>
              <h3>₹595</h3>
            </div>
            <div className="main_right_box1_row2">
              <p>38% Saved</p>
              <h4>Best Results</h4>
              <img src={number1} alt="Price" />
            </div>
          </div>
          {/* Box 2 */}
          <div className="main_right_box2">
            <h1>3 Months Pack (12 tubes)</h1>
            <div className="main_right_box2_row1">
              <p>Savings: ₹100</p>
              <h2>₹899</h2>
            </div>
            <div className="main_right_box2_row2">
              <p>12% Saved</p>
              <img src={number2} alt="price" />
            </div>
          </div>
          {/* add To cart */}
          <div className="add_to_cart">
            <img src={Cart} alt="Cart" />
            <button className="addToCartBtn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
