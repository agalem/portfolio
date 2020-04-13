import React, { useState } from "react";
import './contact.css';
import mail from '../../assets/images/mail.jpg';

import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../text/Text";
import Modal from "../modal/Modal";

const Contact = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handleClick = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    }

    return (
        <section className={'contact_container'} id={'#contact'}>
            <div className='contact--flex_img_container'>
                <div className='contact--img_container'>
                    <span className='contact--img_border--outer'/>
                    <a className="contact--img_link" href="https://www.vecteezy.com/free-vector/work" title="Work Vectors by Vecteezy" target="_blank" rel="noopener noreferrer">
                        <img className='contact--img' src={mail} alt={'mail graphic'}/>
                        <span className='contact--img_border--inner'/>
                    </a>
                </div>
            </div>
            <button className={'contact_btn'} onClick={handleClick}>
                <span>
                    <FontAwesomeIcon icon={faPaperPlane} className={'icon_paper-plane'}/>
                </span>
                <Text textId="contact"/>
            </button>
            <Modal type={'contact'} isVisible={isModalVisible} hideModal={hideModal}/>
        </section>
    )
};

export default Contact;