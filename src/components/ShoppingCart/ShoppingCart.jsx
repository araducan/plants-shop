import React, { useState } from "react";
import Modal from "./Modal";
import style from "./ShoppingCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const ShoppingCart = ({ itemsList, setItemsList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<div></div>);

  const onProceed = () => {
    setIsModalOpen(true);
    setModalContent(
      <div>
        <p>The order have been succesfully submitted!</p>
        <p>Your order will be shipped in 3-5 days.</p>
      </div>
    );
    setTimeout(() => {
      clearList();
      setIsModalOpen(false);
    }, [3000]);
  };

  const final = JSON.parse(localStorage.getItem("items"));

  let sum = 0;
  if (final) {
    final.map((item) => {
      sum += item.price.toFixed(2) * item.quantity;
      return sum;
    });
  }


  const addQuantity = (plant) => {
    itemsList.forEach((item) => {
      if (item.name === plant.name) {
        item.quantity = item.quantity + 1;
      }
    });
    const updatedList = [...itemsList];
    setItemsList(updatedList);
    localStorage.setItem("items", JSON.stringify(itemsList));
  };

  const extractQuantity = (plant) => {
    itemsList.forEach((item, index, object) => {
      if (item.name === plant.name) {
        if (item.quantity === 1) {
          object.splice(index, 1);
        }
        item.quantity = item.quantity - 1;
      }
    });
    const updatedList = [...itemsList];
    setItemsList(updatedList);
    localStorage.setItem("items", JSON.stringify(itemsList));
  };

  const deleteItem = (plant) => {
    itemsList.forEach((item, index, object) => {
      if (item.name === plant.name) {
        object.splice(index, 1);
      }
    });
    const updatedList = [...itemsList];
    setItemsList(updatedList);
    localStorage.setItem("items", JSON.stringify(itemsList));
  };

    const clearList = () => {
      localStorage.removeItem("items");
      window.location.reload();
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
                  onClick={() => extractQuantity(item)}
                  className={style.icon}
                  icon={faMinus}
                ></FontAwesomeIcon>
                {item.quantity}
                <FontAwesomeIcon
                  onClick={() => addQuantity(item)}
                  className={style.icon}
                  icon={faPlus}
                ></FontAwesomeIcon>
              </div>
              <div className={style.listItemPrice}>
                {(item.price * item.quantity).toFixed(2)} &#x24;
              </div>
              <FontAwesomeIcon
                onClick={() => deleteItem(item)}
                className={style.delete}
                icon={faTrashAlt}
              ></FontAwesomeIcon>
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
      <Modal isModalOpen={isModalOpen} modalContent={modalContent} />
    </div>
  );
};

export default ShoppingCart;
