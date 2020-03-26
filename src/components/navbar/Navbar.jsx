import React, {useState, useEffect, useContext} from "react";
import { Link, withRouter } from 'react-router-dom';
import './navabar.css';

import { ScrollContext } from "../../contexts/ScrollContext";
import LanguageSelector from "../languageSelector/LanguageSelector";
import Text from "../text/Text";

const Navbar = (props) => {
    const {hash} = props.location;
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
        const element = document.getElementById(scrollContext.activeSection + "-link");
        if (element) {
            element.classList.add('animate');
            const offsetPosition = getOffset(element);
            setActivePosition(offsetPosition.left - 20);
        }
    }, [scrollContext.activeSection])

    const handleHover = (e) => {
        const elem  = e.target;
        const offsetPosition = getOffset(elem);
        setActivePosition(offsetPosition.left - 20);
    };

    const handleMouseOut = () => {
        const element = document.getElementById(selectedLink);
        const offsetPosition = getOffset(element);
        let position = offsetPosition.left;
        selectedLink === '-link' ? position = -250 : position -= 20;
        setActivePosition(position);
    };

    const animate = (e) => {
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(() => {
            e.target.classList.remove('animate');
        },700);
    };

    const handleClick = (e) => {
        const { activeSection, setActiveSection } = scrollContext;
        e.persist();
        animate(e);

        const clickedLinkId = e.target.id;
        if (activeSection !== clickedLinkId) {
            setSelectedLink(clickedLinkId);
            setActiveSection(clickedLinkId.slice(0, -5));
        }
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

    return (
        <nav className='navbar_container'>
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
                    <LanguageSelector/>
                </li>
            </ul>
            <span className={'active_section'} style={{left: activePosition + 'px'}}/>
        </nav>
    )
};

export default withRouter(props => <Navbar {...props}/>);