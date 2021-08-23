import React from "react";
import style from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.title}>ABOUT US</div>
        <div className={style.description}>
          <FontAwesomeIcon
            className={style.icon}
            icon={faAddressCard}
          ></FontAwesomeIcon>
          <p className={style.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            suscipit blanditiis, amet, voluptate fuga repudiandae, magnam est
            optio doloremque illo reiciendis libero dicta nobis animi officia
            facere asperiores rerum ipsa. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
