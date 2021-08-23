import React from "react";
import style from "./About.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import eucalyptus from "../../resources/eucalyptus.jpg";

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
        <div className={style.footer}>
          <img
            className={style.aboutPhoto}
            src={eucalyptus}
            alt="eucalyptus leaf"
          ></img>
          <img
            className={style.aboutPhoto}
            src={eucalyptus}
            alt="eucalyptus leaf"
          ></img>
          <img
            className={style.aboutPhoto}
            src={eucalyptus}
            alt="eucalyptus leaf"
          ></img>
          <img
            className={style.aboutPhoto}
            src={eucalyptus}
            alt="eucalyptus leaf"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
