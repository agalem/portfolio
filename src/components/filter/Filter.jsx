import React from "react";
import './filter.css';

import FilterBtn from "../filterBtn/filterBtn";

const Filter = props => {
    const { activeFilters, setActiveFilters } = props;

    const handleClick = (type, active) => {
        console.log("Btn clicked ", type, " ", active);

        if (!active) {
            const index = activeFilters.indexOf(type);
            if (index !== -1) {
                const newArr = activeFilters;
                newArr.splice(index, 1);
                setActiveFilters(newArr);
            }


        } else {
            if(activeFilters.indexOf(type) === -1) {
                const newArr = activeFilters;
                newArr.push(type);
                setActiveFilters(newArr);
            }
        }
    };

    return (
        <div className='filter_container'>
            <p>Filter projects by technology</p>
            <ul>
                <li>
                    <FilterBtn text={'HTML'} activeBtn={activeFilters.indexOf('HTML') !== -1} filter={handleClick}/>
                </li>
                <li>
                    <FilterBtn text={'CSS'} activeBtn={activeFilters.indexOf('CSS') !== -1} filter={handleClick}/>
                </li>
                <li>
                    <FilterBtn text={'JavaScript'}  activeBtn={activeFilters.indexOf('JavaScript') !== -1} filter={handleClick}/>
                </li>
                <li>
                    <FilterBtn text={'React'}  activeBtn={activeFilters.indexOf('React') !== -1} filter={handleClick}/>
                </li>
            </ul>
        </div>
    );
};

export default Filter;
