import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (

    <footer className="footer">
      <div className="container">

        <div className="footer-content">
          <div className="footer-section about">
            <h2>Sobre mi</h2>
            <p>
              .
            </p>
          </div>
          <div className="footer-section contact">
            <h2>Contacto</h2>
            <p>
              Email: jdibastiano@gmail.com
            </p>
            <p>
              Teléfono: +54 2223-426742
            </p>
          </div>
          <div className="footer-section follow">
            <h2>Redes</h2>
            <div className="social-links">
              <a href="/proximamente">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/proximamente">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/proximamente">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Jonathan Di Bastiano. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;