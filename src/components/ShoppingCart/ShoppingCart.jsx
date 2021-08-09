import React from "react";
import style from "./ShoppingCart.module.scss";

const ShoppingCart = () => {
  const final = JSON.parse(localStorage.getItem("items"));
  let sum = 0;
  final.map((item) => {
    sum += item.price;
    return sum;
  });

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        {final.map((item, key) => (
          <div className={style.listItem} key={key}>
            <div className={style.listItemTitle}>{item.name} </div>
            <div className={style.listItemPrice}>{item.price} &#x24;</div>
          </div>
        ))}
        {sum ? (
          <div className={style.total}> TOTAL: {sum.toFixed(2)} &#x24;</div>
        ) : (
          <div className={style.emptyList}>
            No items added to the shopping cart!
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
