import React from "react";
import './contact.css';

import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className={'contact_container'} id={'#contact'}>
            <a href={'/'} className={'contact_link'}><span><FontAwesomeIcon icon={faPaperPlane} className={'icon_paper-plane'}/></span>Contact me</a>
        </div>
    )
};

export default Contact;