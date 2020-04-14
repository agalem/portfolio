import React, {useState} from "react";
import './filterBtn.css';

const FilterBtn = (props) => {
    const {text, activeBtn, filter} = props;
    const activeColor = '#448fff';
    const notActiveColor='#8bb7f9';

    const [isActive, setActive] = useState(activeBtn);

    const handleClick  = (name) => (e) => {
        e.preventDefault();
        setActive(!isActive);
        filter(name, !isActive);
    };

    return (
        <button className={'filter_btn'} onClick={handleClick(text)} style={{backgroundColor: isActive ? activeColor : notActiveColor}}>{text}</button>
    )
};

export default FilterBtn;
