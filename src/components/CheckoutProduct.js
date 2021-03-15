import React from "react";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id,
      },
    });
  };
  return (
    <div className="checkoutPoduct">
      <img className="checkoutPoduct__image" src={image} alt="" />
      <div className="checkoutPoduct__info">
        <p className="checkoutPoduct__title">{title}</p>
        <p className="checkoutPoduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutPoduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={Math.random()}>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
