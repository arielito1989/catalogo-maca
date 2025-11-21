
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import ReviewForm from './ReviewForm'; // Importar el nuevo componente
import '../styles/Reviews.css';

const Reviews = ({ reviews, addReview }) => {
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
        <div className="reviews-marquee-container">
          <div className="reviews-track">
            {/* Duplicamos las reseñas para el efecto infinito */}
            {[...reviews, ...reviews].map((review, index) => (
              <div key={`${review.id}-${index}`} className="review-card-wrapper">
                <Card className="review-card h-100">
                  <Card.Body>
                    <div className="review-quote-icon">“</div>
                    <div className="stars-container">
                      {[...Array(review.stars)].map((_, i) => (
                        <FaStar key={i} color="var(--secondary-color)" />
                      ))}
                    </div>
                    <Card.Text className="review-text">"{review.review}"</Card.Text>
                    <Card.Title className="review-name">- {review.name}</Card.Title>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
        {/* Añadir el formulario de reseñas debajo de las reseñas existentes */}
        <Row className="justify-content-center">
          <Col lg={8} md={10}>
            <ReviewForm addReview={addReview} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
