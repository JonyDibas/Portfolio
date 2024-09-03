import React from "react";
import './intro.css';
import Selfie from '../../images/Jpen.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import CV from './CV.pdf'


const intro = () => {
    return (
        <div>
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
            <div className="button">
                <button href={CV.pdf} type="button" class="btn btn-primary" download="Jonathan Di Bastiano CV.pdf">Descargar CV</button>
            </div>
        </div>
    )
}

export default intro;