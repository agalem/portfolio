import React from "react";
import './footer.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {faMugHot} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className={'footer_container'}>
            <p>Made with <FontAwesomeIcon icon={faHeart}/> & <FontAwesomeIcon icon={faMugHot}/> by Aga Lempaszek</p>
        </div>
    )
};

export default Footer;