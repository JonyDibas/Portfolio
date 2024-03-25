import React from "react";
import './intro.css';
import Selfie from '../../images/Jpen.png'

const intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hi, </span>
                <span className="introText">I'm <span className="introName">Jonathan Di Bastiano</span> <br /> Computer technician and web programmer</span>
                <p className="introText">Student of the Bachelor's Degree in Systems at the National University of La Plata, Buenos Aires</p>
            </div>
            <div className="selfie">
                <img src={Selfie} alt="Logo" className='selfie' />
            </div>
        </section>
    )
}

export default intro;