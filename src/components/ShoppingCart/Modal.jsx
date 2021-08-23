import React from "react";
import Modal from "react-modal";
import style from "./ShoppingCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

const customModal = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      height: "150px",
    },
  };

  return (
    <Modal
      isOpen={props.isModalOpen}
      isClosed={props.isModalClosed}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className={style.modalContent}>{props.modalContent}</div>
      <FontAwesomeIcon
        icon={faPaperPlane}
        className={style.planeIcon}
      ></FontAwesomeIcon>
    </Modal>
  );
};
export default customModal;
