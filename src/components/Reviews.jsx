
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import ReviewForm from './ReviewForm'; // Importar el nuevo componente
import '../styles/Reviews.css';

const reviews = [
  {
    name: "Ana Pérez",
    review: "¡Las tortas más ricas que he probado! El bizcocho de chocolate es increíblemente húmedo y el relleno de manjar es perfecto. ¡Súper recomendados!",
    stars: 5
  },
  {
    name: "Carlos Gómez",
    review: "Los cupcakes son una delicia, muy esponjosos y con el dulzor justo. La presentación es impecable. Ideal para regalar (¡o para uno mismo!).",
    stars: 5
  },
  {
    name: "Laura Fernandez",
    review: "Las galletas de avena son mis favoritas. Crujientes, sabrosas y se nota que están hechas con ingredientes de calidad. ¡No puedo parar de comerlas!",
    stars: 5
  }
];

const Reviews = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="reviews" className="reviews-section">
      <Container>
        <h2 className="text-center my-5">Lo que dicen nuestros clientes</h2>
        <motion.div 
          className="row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {reviews.map((review, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div variants={itemVariants} className="h-100">
                <Card className="review-card h-100">
                  <Card.Body>
                    <div className="stars-container">
                      {[...Array(review.stars)].map((_, i) => (
                        <FaStar key={i} color="var(--secondary-color)" />
                      ))}
                    </div>
                    <Card.Text className="review-text">"{review.review}"</Card.Text>
                    <Card.Title className="review-name">- {review.name}</Card.Title>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </motion.div>
        {/* Añadir el formulario de reseñas debajo de las reseñas existentes */}
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <ReviewForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
