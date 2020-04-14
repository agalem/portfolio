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

        // if (componentName === '') {
        //     //
        //     // if (topDistance <= 25 && bottomDistance > 25) {
        //     //     setActiveSectionHandler(activeSection, setActiveSection);
        //     // }
        //
        //     //console.log(activeSection);
        //
        //     if (componentName === 'projects') {
        //         console.log("PROJECTS Window  top: ",topDistance - window.innerHeight);
        //         console.log("PROJECTS Window  bottom: ",bottomDistance - window.innerHeight);
        //         if(topDistance - window.innerHeight <= 500 && bottomDistance - window.innerHeight > -320) {
        //             setActiveSectionHandler(activeSection, setActiveSection);
        //         }
        //     }
        // }

        if (componentName === '') {
            if ((window.innerHeight - bottomDistance) < 450 ) {
                setActiveSectionHandler(activeSection, setActiveSection);
            }
        }


        if (componentName === 'projects') {
            // console.log(window.innerHeight);
            // console.log("PROJECTS Window  top: ",topDistance);
            // console.log(((window.innerHeight - topDistance) / window.innerHeight) * 100);
            // console.log("PROJECTS Window bottom", (DOM_element.current.clientHeight + topDistance) - window.innerHeight)

            //console.log(window.innerHeight - topDistance);

            if ((window.innerHeight - bottomDistance) < 250 && (window.innerHeight - topDistance) > 450) {
                setActiveSectionHandler(activeSection, setActiveSection)
            }

        }

        if (componentName === 'about') {
            //console.log("About ", topDistance, " ", bottomDistance - window.innerHeight);
            // if (topDistance - window.innerHeight >= 320 && (bottomDistance - window.innerHeight) > -230 ) {
            //     setActiveSectionHandler(activeSection, setActiveSection);
            // }
            //console.log("ABOUT Window percents top: ", window.innerHeight - topDistance);
            //console.log("ABOUT Window percents bottom: ", window.innerHeight - bottomDistance);

            if(window.innerHeight - bottomDistance < 250 && window.innerHeight - topDistance >= 250) {
                setActiveSectionHandler(activeSection, setActiveSection)
            }

        }

        if (componentName === 'contact') {
            //console.log("Contact: ", bottomDistance - window.innerHeight)
            // if ((bottomDistance - window.innerHeight) <= 70) {
            //     setActiveSectionHandler(activeSection, setActiveSection)
            // }
            //console.log("CONTACT Window percents top: ", window.innerHeight - topDistance);
            // console.log("CONTACT Window percents bottom: ", window.innerHeight - bottomDistance);

            //console.log("Contact, < 250", topDistance - window.innerHeight);
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
