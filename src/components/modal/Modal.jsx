import React, { useRef } from "react";
import './modal.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
import {faSpaceShuttle} from "@fortawesome/free-solid-svg-icons";

const ModalBackground = props => {
    const {isVisible, hideModal} = props;

    return (
        <div style={{top: (isVisible) ? '0' : '150vh'}}
            className={'modal_background'}
            onClick={hideModal}
            aria-hidden={!isVisible}
        >
            {props.children}
        </div>
    )
};

const ContactModal = props => {
    const mailBtn = useRef(null);

    const sendMail = () => {
        const {name, domain, tld} =  mailBtn.current.dataset;
        window.location.href = 'mailto:' + name + '@' + domain + '.' + tld;
    };

    return (
        <section className={'modal_content'}>
            <h3 className={'modal_title'} style={{color: props.headerColor}}>
                Contact me
            </h3>
            <p className={'modal_row'}>
                <a href={'/'} target={'_blank'} rel="noopener noreferrer" className={'modal_link'}>
                    <FontAwesomeIcon icon={faLinkedin} className={'brand_icon'}/>
                    Linkedin
                </a>
            </p>
            <p className={'modal_row'}>
                <a href={'/'} target={'_blank'} rel="noopener noreferrer" className={'modal_link'}>
                    <FontAwesomeIcon icon={faGithubSquare} className={'brand_icon'} />
                    Github
                </a>
            </p>
            <p className={'modal_row'}>
                <button className={'modal_link'}
                   data-name={"aga.lempaszek94"}
                   data-domain={"google"}
                   data-tld={"com"}
                   ref={mailBtn}
                   onClick={sendMail}
                >
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className={'brand_icon'}/>
                    Send me a mail
                </button>
            </p>
        </section>
    )
};

const ProjectModal = props => {
    const backgrounds = ['#abccae', '#00a30a', '#f9fff0', '#d9b0ff', '#b3abcc'];
    const colors = ['#000', '#fff', '#000', '#000', '#000'];

    return (
        <section className={'modal_content'}>
            <h3 className={'modal_title'} style={{color: props.headerColor}}>
                Project Name
            </h3>
            <div className={'modal_columns'} >
                <div className={'modal_block narrow'}>
                    <div className={'modal_snapshot'}></div>
                    <div className={'modal_snapshot--links'}>
                        <a href={'/'} target={'_blank'} rel='noopener noreferrer' >
                            Live
                            <FontAwesomeIcon icon={faSpaceShuttle} className={'modal_snapshot--icon'} />
                        </a>
                        <a href={'/'} target={'_blank'} rel='noopener noreferrer' >
                            Code
                            <FontAwesomeIcon icon={faGithubSquare} className={'modal_snapshot--icon'} />
                        </a>
                    </div>
                </div>
                <div className={'modal_block wide'}>
                    <div>
                        <p className={'project_description'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis tortor mi, a bibendum nisi ornare et. Vestibulum varius finibus erat nec elementum. Suspendisse vitae turpis dolor. Curabitur at nisl nisl. Duis ut purus et neque blandit blandit.
                            <p>Tech stack:</p>
                        </p>
                        <div className={'project_stack'}>
                            <span style={{backgroundColor: backgrounds[0], color: colors[0]}}>HTML</span>
                            <span style={{backgroundColor: backgrounds[1], color: colors[1]}}>SCSS</span>
                            <span style={{backgroundColor: backgrounds[2], color: colors[2]}}>JavaScript</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Modal = props => {
    const {type, isVisible, hideModal} = props;


    return (
        <ModalBackground isVisible={isVisible} hideModal={hideModal}>
            <div className={(type.toLowerCase() === 'contact') ? 'modal_container contact_container_style' : 'modal_container project_container_style'}
                 aria-hidden={!isVisible}>
                <button className={'modal_btn'} onClick={hideModal}>
                    <FontAwesomeIcon icon={faTimes} className={'modal_icon--shadow'}/>
                    <FontAwesomeIcon icon={faTimes} className={'modal_icon'} />
                </button>
                {(type.toLowerCase() === 'contact') &&
                <ContactModal headerColor={'#66c44e'}/>
                }
                {(type.toLowerCase() === 'project') &&
                <ProjectModal headerColor={'#458FFF'}/>
                }
            </div>
        </ModalBackground>
    )
};

export default Modal;
