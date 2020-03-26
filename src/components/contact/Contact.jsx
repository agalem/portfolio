import React from "react";
import './contact.css';
import mail from '../../assets/images/mail.jpg';

import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../text/Text";

const Contact = () => {
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
            <a href={'/'} className={'contact_link'}><span><FontAwesomeIcon icon={faPaperPlane} className={'icon_paper-plane'}/></span>
                <Text textId="contact"/>
            </a>
        </section>
    )
};

export default Contact;