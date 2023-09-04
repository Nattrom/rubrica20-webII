import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
    marginTop: '50px',
    left: 0,
    bottom: 0,
    width: '100%',
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: 'white', // Cambiar el color a blanco
  };

  return (
    <footer style={footerStyle}>
      <div className="container">
        <p>Desarrollado por NATALIA ROMERIN</p>
        <p>Objetivo de la Aplicación: En términos generales las actividades buscan el manejo del estado, las rutas e interacciones con los diferentes elementos que componen la interfaz de usuario de una aplicación web.</p>
        <div style={socialIconsStyle}>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

