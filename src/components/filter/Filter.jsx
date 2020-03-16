import React from "react";
import './filter.css';

import FilterBtn from "../filterBtn/filterBtn";

const Filter = () => {
    return (
        <div className='filter_container'>
            <p>Filter projects by technology</p>
            <ul>
                <li>
                    <FilterBtn text={'HTML'}/>
                </li>
                <li>
                    <FilterBtn text={'CSS'}/>
                </li>
                <li>
                    <FilterBtn text={'SCSS'}/>
                </li>
                <li>
                    <FilterBtn text={'JavaScript'}/>
                </li>
                <li>
                    <FilterBtn text={'React'}/>
                </li>
            </ul>
        </div>
    );
};

export default Filter;