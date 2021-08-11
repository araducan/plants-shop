import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import plant1 from "../../resources/plant4.png";
import plant2 from "../../resources/plant2.png";
import plant3 from "../../resources/plant3.png";
import style from "./Shop.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [itemsList, setItemsList] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

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
    }
  };
  console.log(itemsList);

  localStorage.setItem("items", JSON.stringify(itemsList));

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <Card
          plant={plant1}
          title={"Areca palm"}
          price={15.98}
          getPlant={handleClick}
        ></Card>
        <Card
          plant={plant2}
          title={"Aloe barbadensis"}
          price={9.98}
          getPlant={handleClick}
        ></Card>
        <Card
          plant={plant3}
          title={"Monstera deliciosa"}
          price={2.98}
          getPlant={handleClick}
        ></Card>
      </div>
      <button className={style.shopButton}>
        <Link className={style.shopLink} to="/shopping-cart">
          <FontAwesomeIcon
            className={style.cartIcon}
            icon={faCartPlus}
          ></FontAwesomeIcon>
          My shopping cart
        </Link>
      </button>
    </div>
  );
};

export default Shop;
