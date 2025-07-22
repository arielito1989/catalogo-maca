
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/images/logo.svg';
import '../styles/Footer.css';

const Footer = () => {
  const whatsappNumber = '5491160399835';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

  return (
    <footer id="footer" className="footer-section">
      <Container fluid className="footer-container">
        <Row className="footer-row">
          {/* Columna de la Marca */}
          <Col md={4} className="footer-column brand-column">
            <div className="footer-brand">
              <img src={logo} alt="Dulces Maquialex Logo" className="footer-logo" />
              <h4 className="footer-title">Dulces Maquialex</h4>
            </div>
            <p className="footer-subtitle">Endulzando tus momentos</p>
          </Col>

          {/* Columna de Redes Sociales */}
          <Col md={4} className="footer-column social-column">
            <h5 className="footer-heading">Contacto y Redes</h5>
            <div className="social-icons">
              <a href="https://www.instagram.com/stories/dulces_maquialex/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </Col>

          {/* Columna de Copyright */}
          <Col md={4} className="footer-column copyright-column">
            <p className="footer-copyright">
              &copy; 2025 <span className="copyright-name">Ariel Nogueroles</span>.
              <br />
              Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-float">
        <FaWhatsapp />
      </a>
    </footer>
  );
};

export default Footer;
