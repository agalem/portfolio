import React, { useEffect, useRef } from 'react';
import './projects.css';

import Project from "../project/Project";
import Filter from "../filter/Filter";

const throttle = require('lodash.throttle');

const Projects = () => {

    const DOM_Element = useRef(null);

    const handleWindowScroll = () => {
        console.log("Position from top: ", document.getElementById('#projects').offsetTop)
        console.log("Current difference with scroll ", window.scrollY);
        console.log("Element height ", document.getElementById('#projects').offsetHeight);
        console.log(DOM_Element.current.offsetTop);
        console.log(DOM_Element.current.clientHeight)
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
                <h2 className='projects_title'>Projects</h2>
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