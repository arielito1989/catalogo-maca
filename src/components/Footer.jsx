
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  const whatsappNumber = '5491160399835';
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}`;

  return (
    <footer id="footer" className="footer-section">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="footer-title">Dulces Maquialex</h5>
            <p className="footer-subtitle">Endulzando tus momentos</p>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="social-icons">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaWhatsapp />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <p className="footer-copyright">
              &copy; 2025 Ariel Nogueroles. Todos los derechos reservados.
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
