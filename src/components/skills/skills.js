import React from "react";
import './skills.css';
import reactLogo from '../../images/react.png'
import angularLogo from '../../images/angular.png'
import jsLogo from '../../images/js.png'
import nodejsLogo from '../../images/nodejs.png'
import sqlLogo from '../../images/sql.png'
import bootstrapLogo from '../../images/bootstrap.png'
import psLogo from '../../images/ps2.png'
import illustratorLogo from '../../images/illustrator2.png'
import linuxLogo from '../../images/linux.png'
import windowsLogo from '../../images/windows.png'
import iosLogo from '../../images/apple.png'
import androidLogo from '../../images/android.png'
import fortinetLogo from '../../images/fortinet.png'
import camerasLogo from '../../images/cameras.png'
import pcLogo from '../../images/pc.png'



const skills = () => {
    return (
        <section id="skillsContent">
            <h1 className="title">Skills</h1>

            <div className="skills">
                <div className="cards">
                    <div className="cardContent">
                        <h2 className="cardTitle">Technic</h2>
                        <h3> <img src={linuxLogo} alt="linux" className='Logo' /></h3>
                        <h3> <img src={windowsLogo} alt="windows" className='Logo' /></h3>
                        <h3> <img src={iosLogo} alt="ios" className='Logo' /></h3>
                        <h3> <img src={androidLogo} alt="android" className='Logo' /></h3>
                        <h3> <img src={fortinetLogo} alt="fortinet" className='Logo' /></h3>
                        <h3> <img src={camerasLogo} alt="cameras" className='Logo' /></h3>
                        <h3> <img src={pcLogo} alt="pc" className='Logo' /></h3>

                    </div>
                </div>
                <div className="cards">
                    <div className="cardContent">
                        <h2 className="cardTitle">Programmer </h2>
                        <h3> <img src={reactLogo} alt="react" className='Logo' /></h3>
                        <h3> <img src={angularLogo} alt="angular" className='Logo' /></h3>
                        <h3> <img src={jsLogo} alt="js" className='Logo' /></h3>
                        <h3> <img src={bootstrapLogo} alt="bootstrap" className='Logo' /></h3>
                        <h3> <img src={nodejsLogo} alt="nodejs" className='Logo' /></h3>
                        <h3> <img src={sqlLogo} alt="sql" className='Logo' /></h3>
                    </div>
                </div>
                <div className="cards">
                    <div className="cardContent">
                        <h2 className="cardTitle">Desing</h2>
                        <h3> <img src={psLogo} alt="photoshop" className='Logo' /></h3>
                        <h3> <img src={illustratorLogo} alt="illustrator" className='Logo' /></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default skills;