import React, {useContext, useState} from "react";
import {languageOptions} from "../../languages";
import {LanguageContext} from "../../contexts/LanguageContext";
import './languageSelector.css';

const LanguageSelector = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en');
    const languageContext = useContext(LanguageContext);

    const handleLanguageChange = e => {
        e.preventDefault();
        const clickedBtnValue = e.currentTarget.value;
        const selectedLanguage = languageOptions.find(item => item.id === clickedBtnValue);
        setCurrentLanguage(clickedBtnValue);
        languageContext.setLanguage(selectedLanguage);
    };

    let flagEmoji;
    if (currentLanguage === 'en') {
        flagEmoji = "\ud83c\uddf5" + "\ud83c\uddf1";
    } else {
        flagEmoji = "\ud83c\uddec" + "\ud83c\udde7"
    }

    return (
        <button href={'/'} className='lang' value={(currentLanguage === 'en') ? 'pl' : 'en'} onClick={handleLanguageChange}>
             <span role={'img'} aria-label={'change language to polish'}>
                 {flagEmoji}
             </span>
        </button>
    )
};

export default LanguageSelector;