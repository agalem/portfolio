import React from "react";
import {ReactComponent as Logo} from "../../assets/images/developer.svg";
import './about.css';

import {faHtml5, faCss3Alt, faJsSquare, faNode, faReact} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import Text from "../text/Text";

const About = () => {
    return (
        <section className='about_container' id={'#about'}>
            <h2 className='about_title'>
                <Text textId="about"/>
            </h2>
            <div className='about_content' >
                <div className='about--img_link_container'>
                    <span className='about--img_border--outer'/>
                    <a className="about--img_link" href="https://www.vecteezy.com/free-vector/work" title="Work Vectors by Vecteezy" target="_blank" rel="noopener noreferrer">
                        <Logo className='about--img_container'/>
                        <span className='about--img_border--inner'/>
                    </a>
                </div>
                <p className='about_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a varius ante,
                    et bibendum quam. Nulla maximus mi magna, nec auctor erat mattis sed. Ut
                    maximus ligula augue, vitae volutpat justo blandit nec. Aliquam erat volutpat.
                    Aliquam libero justo, hendrerit eu dapibus in, suscipit id augue. Integer sed
                    odio congue, porta nibh et, vulputate ligula.</p>
            </div>
            <div className={"icons_container"}>
                <FontAwesomeIcon icon={faHtml5} className={'icon--tech'} style={{color: '#E44D26'}}/>
                <FontAwesomeIcon icon={faCss3Alt} className={'icon--tech'} style={{color: '#026DB5'}}/>
                <FontAwesomeIcon icon={faJsSquare} className={'icon--tech'} style={{color: '#F0D91D'}}/>
                <FontAwesomeIcon icon={faReact} className={'icon--tech'} style={{color: '#5ED5F4'}}/>
                <FontAwesomeIcon icon={faNode} className={'icon--tech'} style={{ color: '#7CB801' }}/>
            </div>
        </section>
    )
};

export default About;
