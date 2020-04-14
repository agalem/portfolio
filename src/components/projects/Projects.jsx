import React, {useState, useEffect} from 'react';
import './projects.css';

import Project from "../project/Project";
import Filter from "../filter/Filter";
import Text from "../text/Text";
import Modal from "../modal/Modal";

import portfolio from '../../assets/images/projects_snapshots/portfolio.png';
import card_form from '../../assets/images/projects_snapshots/card_form.png';
import sudoku from '../../assets/images/projects_snapshots/sudoku.png';
import bikeTemplate from '../../assets/images/projects_snapshots/bikeTemplate.png';
import project3 from '../../assets/images/projects_snapshots/project3.png';
import project17 from '../../assets/images/projects_snapshots/project17.png';
import project37 from '../../assets/images/projects_snapshots/project37.png';
import FilterBtn from "../filterBtn/filterBtn";

const Projects = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [activeFilters, ] = useState(["HTML", "CSS", "SCSS", "JavaScript", "React"]);

    const [showHTML, setShowHTML] = useState(true);
    const [showCSS, setShowCSS] = useState(true);
    const [showSCSS, setShowSCSS] = useState(true);
    const [showJavaScript, setShowJavaScript] = useState(true);
    const [showReact, setShowReact] = useState(true);

    const [modalData, setModalData] = useState({
        background: null,
        title: 'projectDefaultTitle',
        description: '',
        technologies: [],
        linkLive: '',
        linkCode: ''
    });

    const showModal = data => {
        setModalData(data);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
    };

    const handleClick = (type, isActive) => {
        console.log(type, isActive);

        switch (type) {
            case 'HTML':
                setShowHTML(isActive);
                break;
            case 'CSS':
                setShowCSS(isActive);
                break;
            case 'SCSS':
                setShowSCSS(isActive);
                break;
            case 'JavaScript':
                setShowJavaScript(isActive);
                break;
            case 'React':
                setShowReact(isActive);
                break;
            default:
                break;
        }
    };

    return (
        <section className='projects_container' id={'#projects'}>
            <div className='projects_intro'>
                <div className='projects_intro-text'>
                    <p>
                        <Text textId={"projectsIntro"}/>
                    </p>
                    <p>
                        <Text textId={"projectsIntroMore"}/><a href={'https://github.com/agalem'} target={"_blank"} rel={"noopener noreferer"} >github</a>
                    </p>
                </div>
                <h2 className='projects_title'>
                    <Text textId="projects"/>
                </h2>
            </div>

            <div className='filter_container'>
                <p>Filter projects by technology</p>
                <ul>
                    <li>
                        <FilterBtn text={'HTML'} activeBtn={activeFilters.indexOf('HTML') !== -1} filter={handleClick}/>
                    </li>
                    <li>
                        <FilterBtn text={'CSS'} activeBtn={activeFilters.indexOf('CSS') !== -1} filter={handleClick}/>
                    </li>
                    <li>
                        <FilterBtn text={'SCSS'} activeBtn={activeFilters.indexOf('SCSS') !== -1} filter={handleClick}/>
                    </li>
                    <li>
                        <FilterBtn text={'JavaScript'}  activeBtn={activeFilters.indexOf('JavaScript') !== -1} filter={handleClick}/>
                    </li>
                    <li>
                        <FilterBtn text={'React'}  activeBtn={activeFilters.indexOf('React') !== -1} filter={handleClick}/>
                    </li>
                </ul>
            </div>

            <div className='projects_gallery'>
                {
                    (showCSS || showReact || showJavaScript) &&

                    <Project showModal={showModal} background={portfolio}
                             TextComponent={<Text textId={'projectPortfolio'}/>}
                             TitleComponent={<Text textId={'projectPortfolioTitle'}/>}
                             technologies={['React', 'CSS']}
                             linkLive={'https://agalem.github.io/'}
                             linkCode={'https://github.com/agalem/portfolio'}
                    />

                }
                {
                    (showReact || showJavaScript) &&

                    <Project showModal={showModal} background={card_form}
                             TextComponent={<Text textId={'projectCard'}/>}
                             TitleComponent={<Text textId={'projectCardTitle'} />}
                             technologies={['React', 'styled-components', 'TypeScript']}
                             linkLive={'https://agalem.github.io/react-card-form/'}
                             linkCode={'https://github.com/agalem/react-card-form'}
                    />

                }

                {
                    (showJavaScript || showCSS || showHTML) &&
                    <Project showModal={showModal} background={sudoku}
                             TextComponent={<Text textId={'projectSudoku'}/>}
                             TitleComponent={<Text textId={'projectSudokuTitle'} />}
                             technologies={['HTML', 'CSS', 'JavaScript']}
                             linkLive={'https://agalem.github.io/sudoku-solver-es6/'}
                             linkCode={'https://github.com/agalem/sudoku-solver-es6'}
                    />
                }

                {
                    (showHTML || showSCSS || showJavaScript) &&

                    <Project showModal={showModal} background={bikeTemplate}
                             TextComponent={<Text textId={'templateBike'}/>}
                             TitleComponent={<Text textId={'templateBikeTitle'}/>}
                             technologies={['HTML', 'SCSS', 'JavaScript', 'jQuery']}
                             linkLive={'https://agalem.github.io/bikeTemplate/'}
                             linkCode={'https://github.com/agalem/bikeTemplate'}
                    />
                }

                {
                    (showHTML || showCSS || showSCSS || showJavaScript) &&

                    <Project showModal={showModal} background={project3}
                             TextComponent={<Text textId={'template3'}/>}
                             TitleComponent={<Text textId={'template3Title'}/>}
                             technologies={['HTML', 'SCSS', 'JavaScript', 'jQuery']}
                             linkLive={'https://agalem.github.io/template3/'}
                             linkCode={'https://github.com/agalem/template3'}
                    />
                }

                {
                    (showHTML || showCSS || showSCSS || showJavaScript) &&

                    <Project showModal={showModal} background={project17}
                             TextComponent={<Text textId={'template17'}/>}
                             TitleComponent={<Text textId={'template17Title'} />}
                             technologies={['HTML', 'SCSS', 'JavaScript']}
                             linkLive={'https://github.com/agalem/template17'}
                             linkCode={'https://agalem.github.io/template17/'}
                    />
                }

                {
                    (showHTML || showCSS || showSCSS || showJavaScript) &&

                    <Project showModal={showModal} background={project37}
                             TextComponent={<Text textId={'template37'}/>}
                             TitleComponent={<Text textId={'template37Title'}/>}
                             technologies={['HTML', 'SCSS', 'JavaScript', 'jQuery']}
                             linkLive={'https://agalem.github.io/template37/'}
                             linkCode={'https://github.com/agalem/template37'}
                    />
                }

            </div>
            <Modal type={'project'} isVisible={isModalVisible} hideModal={hideModal}
                   title={modalData.title}
                   description={modalData.description}
                   snapshot={modalData.snapshot}
                   technologies={modalData.technologies}
                   linkLive={modalData.linkLive}
                   linkCode={modalData.linkCode}
                   TextComponent={modalData.TextComponent}
                   TitleComponent={modalData.TitleComponent}
            />
        </section>
    )
};

export default Projects;
