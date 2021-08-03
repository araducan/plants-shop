import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={`${style.subcontainer} ${style.logo}`}>plant.</div>{" "}
      <div className={style.subcontainer}>
        <Link className={style.link} to="/">
          Home
        </Link>
        <Link className={style.link} to="/">
          Shop
        </Link>
        <Link className={style.link} to="/">
          About
        </Link>
        <Link className={style.link} to="/">
          Contact
        </Link>
      </div>
      <div className={style.subcontainer}>
        <div className={style.search}>
          <FontAwesomeIcon
            className={style.icon}
            icon={faSistrix}
          ></FontAwesomeIcon>
          <input className={style.input} type="text"></input>
        </div>

        <FontAwesomeIcon
          className={style.icon}
          id={style.cart}
          icon={faShopify}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Header;
