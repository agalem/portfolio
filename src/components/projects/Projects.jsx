import React from 'react';
import './projects.css';

import Project from "../project/Project";
import Filter from "../filter/Filter";

const Projects = () => {
    return (
        <div className='projects_container' id={'#projects'}>
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
        </div>
    )
};

export default Projects;