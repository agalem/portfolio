import React, {useState} from "react";
import './filterBtn.css';

const FilterBtn = (props) => {
    const {text} = props;
    const activeColor = '#448fff';
    const notActiveColor='#8bb7f9';

    const [isActive, setActive] = useState(true);

    const handleClick = (e) => {
        e.preventDefault();
        setActive(!isActive);
    };

    return (
        <button className={'filter_btn'} onClick={handleClick} style={{'background-color': isActive ? activeColor : notActiveColor}}>{text}</button>
    )
};

export default FilterBtn;