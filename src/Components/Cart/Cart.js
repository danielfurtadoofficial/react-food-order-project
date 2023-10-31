import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItens = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          description={item.description}
          price={item.price}
          amount={item.amount}
          onAdd={addItemHandler.bind(null, {...item, amount: 1})}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal className={styles.cart} onClick={props.onCloseHandler}>
      {cartItens}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles["button--alt"]}
          onClick={props.onCloseHandler}
        >
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
