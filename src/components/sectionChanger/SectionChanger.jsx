import React, { useContext, useEffect, useRef } from "react";

import { ScrollContext } from "../../contexts/ScrollContext";

const throttle = require('lodash.throttle');

const SectionChanger = props => {
    const {componentName} = props;

    const DOM_element = useRef(null)
    const scrollContext = useContext(ScrollContext);

    const handleWindowScroll = () => {
        const topDistance = DOM_element.current.offsetTop - window.scrollY;
        const bottomDistance = (DOM_element.current.offsetTop + DOM_element.current.clientHeight) - window.scrollY;

        const { activeSection, setActiveSection, isScrolling } = scrollContext;

        if (isScrolling) {
            return;
        }

        if (componentName === '') {
            if ((window.innerHeight - bottomDistance) < 450 ) {
                setActiveSectionHandler(activeSection, setActiveSection);
            }
        }


        if (componentName === 'projects') {
            if ((window.innerHeight - bottomDistance) < 250 && (window.innerHeight - topDistance) > 450) {
                setActiveSectionHandler(activeSection, setActiveSection)
            }

        }

        if (componentName === 'about') {
            if(window.innerHeight - bottomDistance < 250 && window.innerHeight - topDistance >= 250) {
                setActiveSectionHandler(activeSection, setActiveSection)
            }

        }

        if (componentName === 'contact') {
            if ((topDistance - window.innerHeight) <= -250) {
                setActiveSectionHandler(activeSection, setActiveSection)
            }
        }

    };

    const setActiveSectionHandler = (activeSection, setActiveSection) => {
        if (activeSection !== "#"+componentName) {
            setActiveSection("#"+componentName);
            const firstToUppercase = componentName.charAt(0).toUpperCase() + componentName.substring(1);
            window.history.pushState(componentName, firstToUppercase, "/"+componentName);
        }
    };

    const handleWindowScrollThrottled = throttle(handleWindowScroll);

    useEffect(() => {
        window.addEventListener('scroll', handleWindowScrollThrottled);

        return () => {
            window.removeEventListener('scroll', handleWindowScrollThrottled);
        }
    }, [handleWindowScrollThrottled]);

    return <section ref={DOM_element}>
        {props.children}
    </section>

};

export default SectionChanger;
