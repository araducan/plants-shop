import React, { useState } from "react";
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

  const handleActive = () => {
    if (window.location.pathname === "/") {
      setId1(active);
      setId2("");
      setId3("");
      setId4("");
    } else if (window.location.pathname === "/shop") {
      setId2(active);
      setId1("");
      setId3("");
      setId4("");
    } else if (window.location.pathname === "/contact") {
      setId3(active);
      setId1("");
      setId2("");
      setId4("");
    } else if (window.location.pathname === "/about") {
      setId4(active);
      setId1("");
      setId2("");
      setId3("");
    }
  };

  return (
    <div className={style.container}>
      <div className={`${style.subcontainer} ${style.logo}`}>plant.</div>
      <div className={style.subcontainer}>
        <Link
          onClick={() => {
            handleActive();
          }}
          id={id1}
          className={style.link}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => {
            handleActive();
          }}
          id={id2}
          className={style.link}
          to="/shop"
        >
          Shop
        </Link>
        <Link
          onClick={() => {
            handleActive();
          }}
          id={id3}
          className={style.link}
          to="/"
        >
          About
        </Link>
        <Link
          onClick={() => {
            handleActive();
          }}
          id={id4}
          className={style.link}
          to="/contact"
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
