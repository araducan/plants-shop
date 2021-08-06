import React from "react";
import Card from "./Card";
import plant1 from "../../resources/plant4.png";
import plant2 from "../../resources/plant2.png";
import plant3 from "../../resources/plant3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import style from "./Shop.module.scss";
import { Link } from "react-router-dom";

const Shop = () => {
	return (
		<div className={style.container}>
			<div className={style.subContainer}>
				<Card plant={plant1} title={"Areca palm"} price={"15.98$"}></Card>
				<Card plant={plant2} title={"Aloe barbadensis"} price={"9.98$"}></Card>
				<Card
					plant={plant3}
					title={"Monstera deliciosa"}
					price={"2.98$"}
				></Card>
			</div>
			<Link to="/shopping-cart">
				<button className={style.shopButton}>
					<FontAwesomeIcon
						className={style.cartIcon}
						icon={faCartPlus}
					></FontAwesomeIcon>
					My shopping cart
				</button>
			</Link>
		</div>
	);
};

export default Shop;
