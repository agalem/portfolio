import {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";

const Text = props => {
    const {textId} = props;
    const languageContext = useContext(LanguageContext);
    return languageContext.dictionary[textId];
};

export default Text;

