
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
      <Container className="footer-container">
        <Row className="gy-5">
          {/* Columna 1: Marca */}
          <Col md={4} className="footer-column brand-column text-center text-md-start">
            <div className="footer-brand mb-3">
              <img src={logo} alt="Dulces Maquialex Logo" className="footer-logo" />
              <h4 className="footer-title mt-3">Dulces Maquialex</h4>
            </div>
            <p className="footer-description">
              Creando momentos dulces e inolvidables para tus celebraciones más especiales.
              Pastelería artesanal con toque premium.
            </p>
          </Col>

          {/* Columna 2: Enlaces Rápidos */}
          <Col md={4} className="footer-column links-column text-center">
            <h5 className="footer-heading">Explorar</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#home">Inicio</a></li>
              <li><a href="#catalog">Catálogo</a></li>
              <li><a href="#reviews">Reseñas</a></li>
            </ul>
          </Col>

          {/* Columna 3: Contacto */}
          <Col md={4} className="footer-column contact-column text-center text-md-end">
            <h5 className="footer-heading">Contacto</h5>
            <p className="contact-info">Buenos Aires, Argentina</p>
            <div className="social-icons justify-content-center justify-content-md-end mt-3">
              <a href="https://www.instagram.com/stories/dulces_maquialex/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                <FaInstagram />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row>
          <Col className="text-center">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} <span className="copyright-name">Dulces Maquialex</span>. Todos los derechos reservados.
            </p>
            <p className="footer-developer">
              Desarrollado por <a href="https://portfolio-tau-seven-38.vercel.app/" target="_blank" rel="noopener noreferrer" className="developer-link">Ariel Nogueroles</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
