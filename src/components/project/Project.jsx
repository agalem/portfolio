import React from "react";
import './project.css';

const Project = props => {
    const { showModal, background } = props;

    return(
        <button className="project_container" onClick={showModal} style={{ backgroundImage: `url(${background})` }}>
            <span className={'project_container--overflow'}>
                <span className={'project_container--text'}>Show more</span>
            </span>
        </button>
    )
};

export default Project;
