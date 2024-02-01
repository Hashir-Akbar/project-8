import React from "react";
import css from  './hero.module.css';

const Hero = (props) =>{

    return (
         
        <div className={css.header}>
            <div>
                <h1>{props.heading}</h1>
                <div>
                    <span>{props.date}</span>
                    <span>{props.address}</span>
                </div>
            </div>
        </div>
    )
}

export default Hero;