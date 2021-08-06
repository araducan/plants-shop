import React from "react";
import style from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
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
            className={style.cartIcon}
            icon={faCartPlus}
          ></FontAwesomeIcon>
          <div className={style.plantPrice}>{props.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
