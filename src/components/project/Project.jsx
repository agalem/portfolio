import React from "react";
import './project.css';

import Text from "../text/Text";

const Project = props => {
    const { showModal, background, title, description, technologies, linkLive, linkCode, TextComponent, TitleComponent} = props;
    const data = {title, description, technologies, snapshot: background, linkLive, linkCode, TextComponent, TitleComponent};

    return(
        <button className="project_container" onClick={() => showModal(data)} style={{ backgroundImage: `url(${background})` }}>
            <span className={'project_container--overflow'}>
                <span className={'project_container--text'}>
                    <Text textId={"projectShowMore"}/>
                </span>
            </span>
        </button>
    )
};

export default Project;
