import React, {createContext, useState, useContext} from "react";

export const ScrollContext = createContext({
    activeSection: '',
    isScrolling: false
});

export const ScrollPositionProvider = props => {
    const scrollContext = useContext(ScrollContext);
    const [activeSection, setActiveSection] = useState(scrollContext.activeSection);
    const [isScrolling, setIsScrolling] = useState(scrollContext.isScrolling);

    const provider = {
        activeSection,
        setActiveSection: (newActiveSection) => {
            setActiveSection(newActiveSection);
        },
        isScrolling,
        setIsScrolling: (boolValue) => {
            setIsScrolling(boolValue)
        }
    };

    return (
        <ScrollContext.Provider value={provider}>
            {props.children}
        </ScrollContext.Provider>
    )

};

