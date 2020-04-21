import React, {useRef} from "react";
import './contact.css';
import mail from '../../assets/images/mail.jpg';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../text/Text";
import {faGithubSquare, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelopeOpenText, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const mailBtn = useRef(null);

    const sendMail = () => {
        const {name, domain, tld} =  mailBtn.current.dataset;
        window.location.href = 'mailto:' + name + '@' + domain + '.' + tld;
    };

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
            <p className={'contact_text'}>
                <span>
                    <FontAwesomeIcon icon={faPaperPlane} className={'icon_paper-plane'}/>
                </span>
                <Text textId="contact"/>
            </p>
            <div className={'contact_links'}>
                <p className={'link_row'}>
                    <a href={'https://www.linkedin.com/in/agalem/'} target={'_blank'} rel="noopener noreferrer" className={'contact_link'}>
                        <FontAwesomeIcon icon={faLinkedin} className={'brand_icon'}/>
                        Linkedin
                    </a>
                </p>
                <p className={'link_row'}>
                    <a href={'https://github.com/agalem'} target={'_blank'} rel="noopener noreferrer" className={'contact_link'}>
                        <FontAwesomeIcon icon={faGithubSquare} className={'brand_icon'} />
                        Github
                    </a>
                </p>
                <p className={'link_row'}>
                    <button className={'contact_link'}
                            data-name={"aga.lempaszek94"}
                            data-domain={"google"}
                            data-tld={"com"}
                            ref={mailBtn}
                            onClick={sendMail}
                    >
                        <FontAwesomeIcon icon={faEnvelopeOpenText} className={'brand_icon'}/>
                        <Text textId={"contactMail"}/>
                    </button>
                </p>
            </div>
        </section>
    )
};

export default Contact;
