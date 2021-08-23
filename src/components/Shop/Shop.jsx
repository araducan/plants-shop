import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import plant1 from "../../resources/plant4.png";
import plant2 from "../../resources/plant2.png";
import plant3 from "../../resources/plant3.png";
import style from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const Shop = ({ itemsList, setItemsList }) => {
  const handleClick = (plant) => {
    let itemExist = false;
    itemsList.forEach((item) => {
      if (item.name === plant.name) {
        itemExist = true;
      }
    });
    if (itemExist === false) {
      const updatedList = [...itemsList, plant];
      setItemsList(updatedList);
    } else {
      itemsList.forEach((item) => {
        if (item.name === plant.name) {
          item.quantity = item.quantity + 1;
        }
      });
      const updatedList = [...itemsList];
      setItemsList(updatedList);
    }
  };

  localStorage.setItem("items", JSON.stringify(itemsList));

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <Card
          plant={plant1}
          title={"Eucalyptus cinerea"}
          price={15.98}
          getPlant={handleClick}
        ></Card>
        <Card
          plant={plant2}
          title={"Aloe barbadensis"}
          price={19.99}
          getPlant={handleClick}
        ></Card>
        <Card
          plant={plant3}
          title={"Maranta fascinator"}
          price={12.99}
          getPlant={handleClick}
        ></Card>
      </div>
      <button className={style.shopButton}>
        <Link className={style.shopLink} to="/shopping-cart">
          <FontAwesomeIcon
            className={style.cartIcon}
            icon={faPaperPlane}
          ></FontAwesomeIcon>
          My shopping cart
        </Link>
      </button>
    </div>
  );
};

export default Shop;
