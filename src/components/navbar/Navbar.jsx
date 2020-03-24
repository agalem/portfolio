import React, {useState, useEffect} from "react";
import { Link, withRouter } from 'react-router-dom';
import './navabar.css';

const Navbar = (props) => {
    const {hash} = props.location;
    const [activePosition, setActivePosition] = useState(-250);
    const [selectedLink, setSelectedLink] = useState(`${hash}-link`);

    useEffect(() => {
        const element = document.getElementById(selectedLink);
        if (element) {
            const offsetPosition = getOffset(element);
            setActivePosition(offsetPosition.left - 20);
        }
    }, [selectedLink]);

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
        e.persist();
        animate(e);
        setSelectedLink(e.target.id);
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
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to={'/#about'} id={'#about-link'} className='link' onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                        About Me
                    </Link>
                </li>
                <li>
                    <Link to={'/#contact'} id={'#contact-link'} className='link' onClick={handleClick} onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                        Contact
                    </Link>
                </li>
                <li>
                    <a href={'/'} className='lang'><span role={'img'} aria-label={'change language to polish'}>🇵🇱</span></a>
                </li>
            </ul>
            <span className={'active_section'} style={{left: activePosition + 'px'}}/>
        </nav>
    )
};

export default withRouter(props => <Navbar {...props}/>);