import React, { useState } from 'react';
import './navBar.css';
import logo from '../../images/Jblack.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navBar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link activateClass='active' to='intro' spy={true} smooth={true} offset={-150} duration={500} className="desktopMenuListItem">Presentation</Link>
                <Link activateClass='active' to='skills' spy={true} smooth={true} offset={270} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activateClass='active' to='projects' spy={true} smooth={true} offset={-150} duration={500} className="desktopMenuListItem">Projects</Link>
                <Link activateClass='active' to='contact' spy={true} smooth={true} offset={1425} duration={500} className="desktopMenuListItem">Contact</Link>

            </div>
            <button className='desktopMenuBtn' onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior:'smooth'});
            }}></button>

            <FontAwesomeIcon icon="fa-solid fa-bars" bounce alt="Menu" className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
                <Link activateClass='active' to='intro' spy={true} smooth={true} offset={-150} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Presentation</Link>
                <Link activateClass='active' to='skills' spy={true} smooth={true} offset={270} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activateClass='active' to='projects' spy={true} smooth={true} offset={-150} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activateClass='active' to='contact' spy={true} smooth={true} offset={1425} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default NavBar