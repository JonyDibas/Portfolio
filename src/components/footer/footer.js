import React from 'react';
import './footer.css';


function Footer() {
  return (
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Jonathan Di Bastiano. Todos los derechos reservados.</p>
      </div>
    
  );
}

export default Footer;