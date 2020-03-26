import React, {createContext, useState, useContext} from "react";

export const ScrollContext = createContext({
    activeSection: ''
});

export const ScrollPositionProvider = props => {
    const scrollContext = useContext(ScrollContext);
    const [activeSection, setActiveSection] = useState(scrollContext.activeSection);

    const provider = {
        activeSection,
        setActiveSection: (newActiveSection) => {
            setActiveSection(newActiveSection);
        }
    };

    return (
        <ScrollContext.Provider value={provider}>
            {props.children}
        </ScrollContext.Provider>
    )

};

