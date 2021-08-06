import React from "react";
import { useHistory } from "react-router-dom";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";
import { faTemperatureLow } from "@fortawesome/free-solid-svg-icons";
import { faCut } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `shop`;
    history.push(path);
  };
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.title}>MONSTERA</div>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          quibusdam. Eveniet ipsum esse debitis veniam repellat suscipit
          consequatur accusamus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Unde ipsam aliquam, sit dolores totam quos!
        </p>

        <button onClick={routeChange} className={style.greenButton}>
          Discover &nbsp; &#x3e;
        </button>

        <div className={style.footer}>
          <div className={style.bottomContainer}>
            <FontAwesomeIcon
              className={style.icon}
              icon={faTint}
            ></FontAwesomeIcon>
            <div>
              <div className={style.subtitle}>Feeding</div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </div>
          </div>

          <div className={style.bottomContainer}>
            <FontAwesomeIcon
              className={style.icon}
              icon={faTemperatureLow}
            ></FontAwesomeIcon>
            <div>
              <div className={style.subtitle}>Ambient</div>
              Odit totam placeat quibusdam doloremque eaque exercitationem.
            </div>
          </div>

          <div className={style.bottomContainer}>
            <FontAwesomeIcon
              className={style.icon}
              icon={faCut}
            ></FontAwesomeIcon>
            <div>
              <div className={style.subtitle}>Care</div>
              Pariatur laboriosam tempora eligendi rerum error vel blanditiis!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
