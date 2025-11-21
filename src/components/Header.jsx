
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/logo.svg';
import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <Container className="justify-content-between">
        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="d-lg-none" />

        {/* Mobile Logo (only visible on small screens) */}
        <Navbar.Brand href="#home" className="d-lg-none mx-auto">
          <img src={logo} alt="Dulces Maquialex Logo" className="logo-img-mobile" />
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-between align-items-center">
            {/* Left Nav */}
            <div className="d-flex gap-4 nav-group-left">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#catalog">Catálogo</Nav.Link>
            </div>

            {/* Desktop Center Logo */}
            <Navbar.Brand href="#home" className="d-none d-lg-block mx-auto text-center">
              <img src={logo} alt="Dulces Maquialex Logo" className="logo-img-desktop" />
              <div className="brand-text">Dulces Maquialex</div>
            </Navbar.Brand>

            {/* Right Nav */}
            <div className="d-flex gap-4 nav-group-right">
              <Nav.Link href="#reviews">Reseñas</Nav.Link>
              <Nav.Link href="#footer">Contacto</Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
