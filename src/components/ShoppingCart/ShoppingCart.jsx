import React from "react";
import style from "./ShoppingCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = () => {
  const final = JSON.parse(localStorage.getItem("items"));

  let sum = 0;
  if (final) {
    final.map((item) => {
      sum += item.price.toFixed(2) * item.quantity;
      return sum;
    });
  }

  const clearList = () => {
    localStorage.removeItem("items");
    window.location.reload();
  };

  const onProceed = () => {
    setTimeout(() => {
      clearList();
    }, [3000]);
  };

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        {final ? (
          final.map((item, key) => (
            <div className={style.listItem} key={key}>
              <div className={style.listItemTitle}>{item.name} </div>
              <div className={style.listItemTitle}>
                <FontAwesomeIcon
                  className={style.icon}
                  icon={faMinus}
                ></FontAwesomeIcon>
                {item.quantity}
                <FontAwesomeIcon
                  className={style.icon}
                  icon={faPlus}
                ></FontAwesomeIcon>
              </div>
              <div className={style.listItemPrice}>
                {item.price * item.quantity} &#x24;
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
        {sum ? (
          <div>
            <div className={style.bottomContainer}>
              <button className={style.clearBtn} onClick={() => clearList()}>
                Discard items
              </button>
              <div className={style.total}> TOTAL: {sum.toFixed(2)} &#x24;</div>
            </div>
            <div className={style.proceed}>
              <button className={style.proceedBtn} onClick={() => onProceed()}>
                Proceed &nbsp; &#x3e;
              </button>
            </div>
          </div>
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
