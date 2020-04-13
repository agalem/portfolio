import React, {useState} from 'react';
import './projects.css';

import Project from "../project/Project";
import Filter from "../filter/Filter";
import Text from "../text/Text";
import Modal from "../modal/Modal";

import portfolio from '../../assets/images/projects_snapshots/portfolio.png';
import card_form from '../../assets/images/projects_snapshots/card_form.png';
import bikeTemplate from '../../assets/images/projects_snapshots/bikeTemplate.png';
import project3 from '../../assets/images/projects_snapshots/project3.png';
import project17 from '../../assets/images/projects_snapshots/project17.png';
import project37 from '../../assets/images/projects_snapshots/project37.png';

const Projects = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const showModal = () => {
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    return (
        <section className='projects_container' id={'#projects_snapshots'}>
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
                <Project showModal={showModal} background={portfolio}/>
                <Project showModal={showModal} background={card_form}/>
                <Project showModal={showModal} background={bikeTemplate}/>
                <Project showModal={showModal} background={project3}/>
                <Project showModal={showModal} background={project17}/>
                <Project showModal={showModal} background={project37}/>
            </div>
            <Modal type={'project'} isVisible={isModalVisible} hideModal={hideModal}/>
        </section>
    )
};

export default Projects;
