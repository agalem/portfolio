import React, {useState, useEffect, useContext} from "react";
import { Link, withRouter } from 'react-router-dom';
import './navabar.css';

import { ScrollContext } from "../../contexts/ScrollContext";
import LanguageSelector from "../languageSelector/LanguageSelector";
import Text from "../text/Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    const {hash} = props.location;
    const [isOpen, setIsOpen] = useState(false);
    const [activePosition, setActivePosition] = useState(-250);
    const [selectedLink, setSelectedLink] = useState(`${hash}-link`);
    const scrollContext = useContext(ScrollContext);

    useEffect(() => {
        const element = document.getElementById(selectedLink);
        if (element) {
            const offsetPosition = getOffset(element);
            setActivePosition(offsetPosition.left - 20);
        }
    }, [selectedLink]);

    useEffect(() => {
        if (scrollContext.activeSection === '#') {
            setActivePosition(-250);
        }
        const element = document.getElementById(scrollContext.activeSection + "-link");
        if (element) {
            animateDOMElement(element);
            const offsetPosition = getOffset(element);
            setActivePosition(offsetPosition.left - 20);
        }
    }, [scrollContext.activeSection]);

    const handleHover = (e) => {
        const elem  = e.target;
        const offsetPosition = getOffset(elem);
        setActivePosition(offsetPosition.left - 20);
    };

    const handleMouseOut = () => {
        const { activeSection } = scrollContext;
        const element = document.getElementById(activeSection+ "-link");
        const offsetPosition = getOffset(element);
        let position = offsetPosition.left;
        activeSection === '#' || activeSection === '' ? position = -250 : position -= 20;
        setActivePosition(position);
    };

    const handleClick = (e) => {
        const { setActiveSection, setIsScrolling } = scrollContext;
        e.persist();
        animate(e);

        //prevent moving underlining span during page auto scrolling after click
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 800);

        const clickedLinkId = e.target.id;
        if (selectedLink !== clickedLinkId) {
            setSelectedLink(clickedLinkId);
            setActiveSection(clickedLinkId.slice(0, -5));
        }

        if (window.innerWidth <= 500) {
            handleMobileMenu();
        }
    };

    const animate = (e) => {
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(() => {
            e.target.classList.remove('animate');
        },500);
    };

    const animateDOMElement = (element) => {
        element.classList.remove('animate');
        element.classList.add('animate');
        setTimeout(() => {
            element.classList.remove('animate');
        }, 500);
    };

    const getOffset = (elem) => {
        let x  = 0;
        let y = 0;
        while (elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
            x += elem.offsetLeft - elem.scrollLeft;
            y += elem.offsetTop - elem.scrollTop;
            elem = elem.offsetParent;
        }
        return { top: y, left: x};
    };

    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            {!isOpen &&
                <React.Fragment>
                    <FontAwesomeIcon icon={faBars} className={'menu_icon'} onClick={handleMobileMenu}/>
                    <FontAwesomeIcon icon={faBars} className={'menu_icon--shadow'} />
                </React.Fragment>
            }
            {
                isOpen &&
                    <React.Fragment>
                        <FontAwesomeIcon icon={faTimes} className={'menu_icon'} onClick={handleMobileMenu}/>
                        <FontAwesomeIcon icon={faTimes} className={'menu_icon--shadow'} />
                    </React.Fragment>
            }
            <nav className={(isOpen) ? 'navbar_container active' : 'navbar_container'}>
                <ul>
                    <li>
                        <Link to={'/#projects'} id={'#projects-link'} className='link' onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                            <Text textId="navigation_projects"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/#about'} id={'#about-link'} className='link' onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                            <Text textId="navigation_about"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/#contact'} id={'#contact-link'} className='link' onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                            <Text textId="navigation_contact"/>
                        </Link>
                    </li>
                    <li>
                        <LanguageSelector handleMobileMenu={handleMobileMenu}/>
                    </li>
                </ul>
                <span className={'active_section'} style={{left: activePosition + 'px'}}/>
            </nav>
        </React.Fragment>
    )
};

export default withRouter(props => <Navbar {...props}/>);