import React from "react";
import './about.css';


const About = () => {
    return (
        <div className='about_container'>
            <h2 className='about_title'>About me</h2>
            <div className='about_content' >
                <div className='rectangle_photo'/>
                <p className='about_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a varius ante,
                    et bibendum quam. Nulla maximus mi magna, nec auctor erat mattis sed. Ut
                    maximus ligula augue, vitae volutpat justo blandit nec. Aliquam erat volutpat.
                    Aliquam libero justo, hendrerit eu dapibus in, suscipit id augue. Integer sed
                    odio congue, porta nibh et, vulputate ligula.</p>
            </div>
        </div>
    )
};

export default About;