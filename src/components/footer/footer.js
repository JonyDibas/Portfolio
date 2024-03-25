import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Jonathan Di Bastiano. Todos los derechos reservados.</p>
      </div>
    
  );
}

export default Footer;