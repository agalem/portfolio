import React, {useContext, useEffect, useRef} from 'react';
import './projects.css';

import Project from "../project/Project";
import Filter from "../filter/Filter";
import Text from "../text/Text";
import { ScrollContext } from "../../contexts/ScrollContext";

const throttle = require('lodash.throttle');

const Projects = () => {

    const DOM_Element = useRef(null);
    const scrollContext = useContext(ScrollContext);

    const handleWindowScroll = () => {
        // console.log("Position from top: ", document.getElementById('#projects').offsetTop)
        // console.log("Current difference with scroll ", window.scrollY);
        // console.log("Element height ", document.getElementById('#projects').offsetHeight);
        // console.log(DOM_Element.current.offsetTop);
        // console.log(DOM_Element.current.clientHeight)

        const topDistance = DOM_Element.current.offsetTop - window.scrollY;
        const bottomDistance = (DOM_Element.current.offsetTop + DOM_Element.current.clientHeight) - window.scrollY;

        //console.log("Top distance: ", topDistance);
        //console.log("Bottom distance: ", bottomDistance);

        const { activeSection, setActiveSection } = scrollContext;

        if (topDistance <= 25 && bottomDistance >= 25) {
            if (activeSection !== "#projects") {
                setActiveSection("#projects");
            }
        }

    };


    const handleWindowScrollThrottled = throttle(handleWindowScroll, 250);

    //window.innerHeight
    useEffect(() => {
        window.addEventListener('scroll', handleWindowScrollThrottled);

        return () => {
            window.removeEventListener('scroll', handleWindowScrollThrottled);
        }

    },[]);


    return (
        <section className='projects_container' id={'#projects'} ref={DOM_Element}>
            <div className='projects_intro'>
                <div className='projects_intro-text'>
                    <p>
                        Nothing says more about developer than the projects she has in a portfolio.
                        There you can find websites and applications I've been working on.
                    </p>
                </div>
                <h2 className='projects_title'>
                    <Text textId="projects"/>
                </h2>
            </div>
            <Filter/>
            <div className='projects_gallery'>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </section>
    )
};

export default Projects;