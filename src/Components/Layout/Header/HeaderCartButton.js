import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [buttonAnimated, setButtonAnimated] = useState(false);
  const btnClasses = `${styles.button} ${buttonAnimated ? styles.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setButtonAnimated(true);

    const timeOutId = setTimeout(() => {
      setButtonAnimated(false)
    }, 300);
    return () => {
      clearTimeout(timeOutId);
      console.log("Effect Clean Up!");
    };
  }, [cartCtx.items]);

  return (
    <button
      className={`${btnClasses} ${props.className}`}
      onClick={props.onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
