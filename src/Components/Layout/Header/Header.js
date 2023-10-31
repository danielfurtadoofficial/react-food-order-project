import React, { Fragment } from "react";
import styles from "./header.module.css";
import mealsImage from "../../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onOpenCart}>Meals</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
export default Header;