import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import aboutImage from '../assets/images/logo.jpeg'; // Placeholder, user can change this
import { motion } from 'framer-motion';

const About = () => {
    const fadeInLeft = {
        hidden: { opacity: 0, x: -300 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 300 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="about-section">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="about-image-col">
                        <motion.div
                            className="about-image-wrapper"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInLeft}
                        >
                            <img src={aboutImage} alt="Nuestra Pasión" className="about-image" />
                            <div className="about-image-decoration"></div>
                        </motion.div>
                    </Col>
                    <Col lg={6} className="about-text-col">
                        <motion.div
                            className="about-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInRight}
                            transition={{ delay: 0.2 }} // Slight delay for text
                        >
                            <h2 className="about-title">Nuestra Historia</h2>
                            <h3 className="about-subtitle">Pasión por la Pastelería Artesanal</h3>
                            <div className="about-divider"></div>
                            <p className="about-text">
                                En <strong>Dulces Maquialex</strong>, cada creación es una obra de amor. Este proyecto nació de mi pasión por transformar ingredientes simples en momentos inolvidables.
                            </p>
                            <p className="about-text">
                                Me dedico a la pastelería artesanal con un toque moderno y sofisticado. Creo que un postre no solo debe ser delicioso, sino también una experiencia visual que despierte todos los sentidos.
                            </p>
                            <p className="about-text">
                                Utilizo solo materia prima de la más alta calidad, sin conservantes ni aditivos, para garantizar ese sabor casero y auténtico que me caracteriza. ¡Déjame endulzar tus celebraciones!
                            </p>
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
