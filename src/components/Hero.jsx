
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Hero.css';
import videoBg from '../assets/video/video.mp4';

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
  };

  return (
    <div id="home" className="hero-section">
      <video src={videoBg} autoPlay loop muted />
      <Container className="text-center">
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
      </Container>
    </div>
  );
};

export default Hero;
