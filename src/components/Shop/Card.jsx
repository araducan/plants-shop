import React from "react";
import style from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  let plant = {
    name: props.title,
    quantity: 1,
    price: props.price,
  };

  return (
    <div className={style.cardContainer}>
      <div className={style.cardSubContainer}>
        <img
          className={style.plantPhoto}
          src={props.plant}
          alt="green plant"
        ></img>
        <div className={style.plantName}>{props.title}</div>
        <div className={style.cart}>
          <FontAwesomeIcon
            onClick={() => {
              props.getPlant(plant);
            }}
            className={style.cartIcon}
            icon={faCartPlus}
          ></FontAwesomeIcon>

          <div className={style.plantPrice}>{props.price} &#x24;</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
