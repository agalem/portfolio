import React, {useState, useEffect, useContext} from 'react';
import './header.css';
import Particles from "react-particles-js";
import Typed from 'react-typed';

import Navbar from "../navbar/Navbar";
import Text from "../text/Text";
import {LanguageContext} from "../../contexts/LanguageContext";

const Header = () => {
    const languageContext = useContext(LanguageContext)
    const [language, setLanguage] = useState(languageContext.language.id);

    useEffect(() => {
        setLanguage(languageContext.language.id);
    },[languageContext.language.id]);

    return (
        <header className="header_container">
            <Navbar/>
            <Particles
                className='particles'
                params={{
                    "particles": {
                        "number": {
                            "value": 6,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#458FFF"
                        },
                        "shape": {
                            "type": "edge",
                            "polygon": {
                                "nb_sides": 4
                            },
                        },
                        "opacity": {
                            "value": 0.6,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 160,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 10,
                                "size_min": 40,
                                "sync": false
                            }
                        },
                        "move": {
                            "enable": true,
                            "speed": 8,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "retina_detect": true
                }} />
            <div className='header_rectangle'>
                <p className={(language === 'pl') ? 'rectangle_text media_pl' : 'rectangle_text media_en'}>
                    <Text textId="welcomeHeader"/>
                </p>
            </div>
            <p className={(language === 'pl') ? 'header_text-outer media_pl' : 'header_text-outer media_en'}>
                <Text textId="welcomeHeader"/>
            </p>
            <Typed
                className='header_text-typed'
                strings={[
                    'JavaScript Developer',
                    'Front End Developer',
                ]}
                typeSpeed={80}
                backSpeed={50}
                loop
            />
        </header>
    )
};

export default Header;