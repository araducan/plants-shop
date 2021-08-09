import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faSistrix } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const active = `${style.underlined}`;
  const [id1, setId1] = useState("");
  const [id2, setId2] = useState("");
  const [id3, setId3] = useState("");
  const [id4, setId4] = useState("");

  const handleActive = (path) => {
    if (path === "/home" || path === "/") {
      setId2("");
      setId3("");
      setId4("");
      setId1(active);
    } else if (path === "/shop") {
      setId1("");
      setId3("");
      setId4("");
      setId2(active);
    } else if (path === "/contact") {
      setId1("");
      setId2("");
      setId4(active);
      setId3("");
    } else if (path === "/about") {
      setId1("");
      setId2("");
      setId3(active);
      setId4("");
    } else {
      setId1("");
      setId2("");
      setId3("");
      setId4("");
    }
  };

  useEffect(() => {
    handleActive(window.location.pathname);
  });

  return (
    <div className={style.container}>
      <div className={`${style.subcontainer} ${style.logo}`}>plant.</div>
      <div className={style.subcontainer}>
        <Link
          to="/home"
          id={id1}
          onClick={() => {
            handleActive("/home");
          }}
          className={style.link}
        >
          Home
        </Link>
        <Link
          to="/shop"
          id={id2}
          onClick={() => {
            handleActive("/shop");
          }}
          className={style.link}
        >
          Shop
        </Link>
        <Link
          to="/about"
          id={id3}
          onClick={() => {
            handleActive("/about");
          }}
          className={style.link}
        >
          About
        </Link>
        <Link
          to="/contact"
          id={id4}
          onClick={() => {
            handleActive("/contact");
          }}
          className={style.link}
        >
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

        <Link
          to="/shopping-cart"
          onClick={() => {
            handleActive("/shopping-cart");
          }}
          className={style.link}
        >
          <FontAwesomeIcon
            className={style.icon}
            id={style.cart}
            icon={faShopify}
          ></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default Header;
