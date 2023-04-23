import React from "react";

import CartButton from "./CartButton";

import headerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
      <>
        <header className={ classes.header }>
          <h1>React Meals</h1>
          <CartButton />
        </header>
        <div className={ classes["main-image"] }>
          <img src={ headerImage } alt="a table full of various food" />
        </div>
      </>
    );
};

export default Header;