import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import "../styles/Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div className="checkout__content">
          {basket?.length === 0 ? (
            <div>
              <h2 className="checkout__title">Your shopping basket is empty</h2>
              <p>You have no items in your basket. To buy one or more items</p>
            </div>
          ) : (
            <div>
              <h2 className="checkout__title">Your shopping basket</h2>
              {basket.map((product) => (
                <CheckoutProduct
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
