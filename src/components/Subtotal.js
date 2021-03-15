import React, { useEffect, useState } from "react";
import "../styles/Subtotal.css";
import { useStateValue } from "./StateProvider";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const [total, setTotal] = useState("");
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  useEffect(() => {
    getBasketTotal();
  }, [basket]);
  const getBasketTotal = () => {
    let subtotal = 0;
    for (let i = 0; i < basket.length; i++) {
      subtotal += basket[i].price;
    }
    setTotal(formatter.format(subtotal));
  };

  return (
    <div className="subtotal">
      <p>
        {`Subtotal (${basket.length} items): `} <strong>{total}</strong>
      </p>
      <div className="subtotal__gift">
        <input type="checkbox" />
        <small>This order contains a gift</small>
      </div>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
