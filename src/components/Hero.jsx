import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import heroVideo from '../assets/video/video.mp4';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut", delay: 0.6 } }
  };

  return (
    <div id="home" className="hero-section">
      <video autoPlay loop muted className="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <Container className="text-center hero-content">
        <motion.h1 
          className="hero-title"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Pastelería Artesanal Hecha con Amor
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Descubre nuestros sabores únicos y endulza tus momentos especiales.
        </motion.p>
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button href="#catalog" variant="outline-light" className="hero-cta-button">
            Explorar Catálogo
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;