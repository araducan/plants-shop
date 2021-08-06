import React from "react";
import style from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPhone,
	faEnvelope,
	faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
	return (
		<div className={style.container}>
			<div className={style.subContainer}>
				<div className={style.title}>MEET US</div>
				<div className={style.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<div className={style.footer}>
					<div className={style.bottomContainer}>
						<FontAwesomeIcon
							className={style.icon}
							icon={faPhone}
						></FontAwesomeIcon>
						<div>
							<div className={style.subtitle}>Phone number</div>
							(+40) 761815578
						</div>
					</div>

					<div className={style.bottomContainer}>
						<FontAwesomeIcon
							className={style.icon}
							icon={faEnvelope}
						></FontAwesomeIcon>
						<div>
							<div className={style.subtitle}>E-mail</div>
							plants@gmail.com
						</div>
					</div>

					<div className={style.bottomContainer}>
						<FontAwesomeIcon
							className={style.icon}
							icon={faMapMarkedAlt}
						></FontAwesomeIcon>
						<div>
							<div className={style.subtitle}>Address</div>
							3425 Stone Street, Apt. 2A, Jacksonville, FL 39404
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
